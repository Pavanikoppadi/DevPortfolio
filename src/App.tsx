/**
 * =============================================================================
 * App.tsx - Root Application Component
 * =============================================================================
 * 
 * This is the main entry point for the React application.
 * It sets up all the required providers and routing configuration.
 * 
 * PROVIDERS HIERARCHY:
 * 1. QueryClientProvider - React Query for data fetching/caching
 * 2. TooltipProvider - Radix UI tooltip context
 * 3. BrowserRouter - React Router for navigation
 * 
 * ROUTES:
 * - "/" → Index page (main portfolio)
 * - "*" → NotFound page (404 catch-all)
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Toast notification components for user feedback
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Tooltip provider for hover tooltips throughout the app
import { TooltipProvider } from "@/components/ui/tooltip";

// React Query for server state management
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Router for client-side routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// =============================================================================
// CONFIGURATION
// =============================================================================

/**
 * QueryClient instance for React Query
 * Manages caching, refetching, and synchronization of server data
 */
const queryClient = new QueryClient();

// =============================================================================
// MAIN COMPONENT
// =============================================================================

/**
 * App Component
 * 
 * Root component that wraps the entire application with:
 * - Data fetching context (React Query)
 * - UI context (Tooltips)
 * - Notification systems (Toaster, Sonner)
 * - Routing (BrowserRouter)
 */
const App = () => (
  // React Query provider for data fetching
  <QueryClientProvider client={queryClient}>
    
    {/* Tooltip provider for Radix UI tooltips */}
    <TooltipProvider>
      
      {/* Toast notification containers */}
      <Toaster />
      <Sonner />
      
      {/* Router for page navigation */}
      <BrowserRouter>
        <Routes>
          {/* Main portfolio page */}
          <Route path="/" element={<Index />} />
          
          {/* 
           * IMPORTANT: Add all custom routes ABOVE this catch-all route.
           * The "*" route matches everything not matched above.
           */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

// Export as default for use in main.tsx
export default App;
