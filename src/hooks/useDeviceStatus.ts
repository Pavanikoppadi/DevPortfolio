import { useState, useEffect } from 'react';

interface DeviceStatus {
  time: string;
  date: string;
  battery: number | null;
  isCharging: boolean;
  connection: string;
  device: string;
}

export const useDeviceStatus = (): DeviceStatus => {
  const [status, setStatus] = useState<DeviceStatus>({
    time: '',
    date: '',
    battery: null,
    isCharging: false,
    connection: 'Unknown',
    device: 'Desktop',
  });

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      const date = now.toLocaleDateString('en-US', { 
        weekday: 'short',
        month: 'short', 
        day: 'numeric' 
      });
      
      setStatus(prev => ({ ...prev, time, date }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Get battery status
    const getBattery = async () => {
      try {
        if ('getBattery' in navigator) {
          const battery = await (navigator as any).getBattery();
          const updateBattery = () => {
            setStatus(prev => ({
              ...prev,
              battery: Math.round(battery.level * 100),
              isCharging: battery.charging,
            }));
          };
          updateBattery();
          battery.addEventListener('levelchange', updateBattery);
          battery.addEventListener('chargingchange', updateBattery);
        }
      } catch (e) {
        console.log('Battery API not supported');
      }
    };
    getBattery();

    // Get connection type
    const getConnection = () => {
      const nav = navigator as any;
      if (nav.connection) {
        const conn = nav.connection;
        const type = conn.effectiveType || conn.type || 'Unknown';
        const typeMap: Record<string, string> = {
          'slow-2g': 'Slow',
          '2g': '2G',
          '3g': '3G',
          '4g': '4G',
          'wifi': 'WiFi',
        };
        setStatus(prev => ({ ...prev, connection: typeMap[type] || type.toUpperCase() }));
        
        conn.addEventListener('change', getConnection);
      } else if (navigator.onLine) {
        setStatus(prev => ({ ...prev, connection: 'Online' }));
      }
    };
    getConnection();

    // Get device type
    const getDevice = () => {
      const ua = navigator.userAgent;
      let device = 'Desktop';
      if (/iPhone/.test(ua)) device = 'iPhone';
      else if (/iPad/.test(ua)) device = 'iPad';
      else if (/Android/.test(ua)) device = 'Android';
      else if (/Mac/.test(ua)) device = 'Mac';
      else if (/Windows/.test(ua)) device = 'Windows';
      else if (/Linux/.test(ua)) device = 'Linux';
      
      setStatus(prev => ({ ...prev, device }));
    };
    getDevice();

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return status;
};
