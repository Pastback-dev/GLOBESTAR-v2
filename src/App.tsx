import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import BankAccount from "./pages/BankAccount.tsx";
import TypesOfInvitation from "./pages/TypesOfInvitation.tsx";
import DetailsAndCosts from "./pages/DetailsAndCosts.tsx";
import ApplyInvitation from "./pages/ApplyInvitation.tsx";
import WorkingVisa from "./pages/WorkingVisa.tsx";
import VisitingVisa from "./pages/VisitingVisa.tsx";
import StudyingVisa from "./pages/StudyingVisa.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/bank-account" element={<BankAccount />} />
          <Route path="/types-of-invitation" element={<TypesOfInvitation />} />
          <Route path="/details-and-costs" element={<DetailsAndCosts />} />
          <Route path="/apply-invitation" element={<ApplyInvitation />} />
          <Route path="/working-visa" element={<WorkingVisa />} />
          <Route path="/visiting-visa" element={<VisitingVisa />} />
          <Route path="/studying-visa" element={<StudyingVisa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;