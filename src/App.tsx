import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import Navbar from "@/components/Navbar";

import Index from "./pages/Index.tsx";
import Program from "./pages/Program.tsx";
import MapPage from "./pages/Map.tsx";
import Speakers from "./pages/Speakers.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>

        <ScrollToTop />
        <Navbar />

        <Routes>

          {/* HOME */}
          <Route path="/" element={<Index />} />

          {/* NEW PAGES */}
          <Route path="/program" element={<Program />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/about" element={<About />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;