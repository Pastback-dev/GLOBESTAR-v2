import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PausedPage from "./pages/PausedPage.tsx";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";

const queryClient = new QueryClient();

// Set this to true to show the paused page, false to show the full site
const IS_PAUSED = true;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {IS_PAUSED ? (
            <Routes>
              <Route path="*" element={<PausedPage />} />
            </Routes>
          ) : (
            <Routes>
              {/* Existing routes would go here when not paused */}
              <Route path="*" element={<PausedPage />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;