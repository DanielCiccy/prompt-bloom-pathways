import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EleveStudents from "./pages/EleveStudents";
import ProfileChoice from "./pages/ProfileChoice";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";
import ParentSignup from "@/pages/ParentSignup";
import FamilyManagement from "@/pages/FamilyManagement";
import About from "./pages/About";
import Auth from "@/pages/Auth";
import CreateAssignmentTeacher from "./pages/CreateAssignmentTeacher";
import JoinAssignment from "./pages/JoinAssignment";
import AssignmentSession from "./pages/AssignmentSession";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-assignment" element={<CreateAssignmentTeacher />} />
          <Route path="/join-assignment" element={<JoinAssignment />} />
          <Route path="/assignment-session" element={<AssignmentSession />} />
          <Route path="/profile" element={<ProfileChoice />} />
          <Route path="/eleve-students" element={<EleveStudents />} />
          <Route path="/parent-signup" element={<ParentSignup />} />
          <Route path="/family" element={<FamilyManagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
