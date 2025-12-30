import { motion } from "framer-motion";
import { Battery, BatteryCharging, Wifi, Monitor, Smartphone } from "lucide-react";
import { useDeviceStatus } from "@/hooks/useDeviceStatus";

export const DeviceStatusBox = () => {
  const { time, date, battery, isCharging, connection, device } = useDeviceStatus();

  const getDeviceIcon = () => {
    if (device === 'iPhone' || device === 'Android') {
      return <Smartphone size={10} />;
    }
    return <Monitor size={10} />;
  };

  const getBatteryIcon = () => {
    if (isCharging) return <BatteryCharging size={10} />;
    return <Battery size={10} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mb-4 p-3 border border-sidebar-border rounded-lg"
    >
      {/* Time & Date */}
      <div className="text-center mb-3 pb-3 border-b border-sidebar-border">
        <p className="text-sidebar-foreground font-semibold text-lg leading-none">
          {time}
        </p>
        <p className="text-sidebar-muted text-[10px] mt-1">
          {date}
        </p>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-3 gap-2">
        {/* Device */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-md bg-sidebar-accent flex items-center justify-center text-sidebar-muted mb-1">
            {getDeviceIcon()}
          </div>
          <span className="text-sidebar-muted text-[8px] leading-tight text-center">
            {device}
          </span>
        </div>

        {/* Connection */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-md bg-sidebar-accent flex items-center justify-center text-sidebar-muted mb-1">
            <Wifi size={10} />
          </div>
          <span className="text-sidebar-muted text-[8px] leading-tight text-center">
            {connection}
          </span>
        </div>

        {/* Battery */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-md bg-sidebar-accent flex items-center justify-center text-sidebar-muted mb-1">
            {getBatteryIcon()}
          </div>
          <span className="text-sidebar-muted text-[8px] leading-tight text-center">
            {battery !== null ? `${battery}%` : '—'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
