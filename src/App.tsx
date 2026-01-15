import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { SoundProvider } from "@/components/ui/SoundProvider";
import { HackerModeToggle } from "@/components/ui/HackerModeToggle";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SoundProvider>
        <Preloader />
        <CustomCursor />
        <HackerModeToggle />
        <FloatingActionButton />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SoundProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
