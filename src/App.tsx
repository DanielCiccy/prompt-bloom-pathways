
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EleveStudents from "./pages/EleveStudents";
import ProfileChoice from "./pages/ProfileChoice";
import Navbar from "@/components/Navbar";
import ParentSignup from "@/pages/ParentSignup";
import FamilyManagement from "@/pages/FamilyManagement";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Navbar globalement en haut (avant les routes) */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profil" element={<ProfileChoice />} />
          <Route path="/élève-students" element={<EleveStudents />} />
          <Route path="/parent-inscription" element={<ParentSignup />} />
          <Route path="/famille" element={<FamilyManagement />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
