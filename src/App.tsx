import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import BankAccount from "./pages/BankAccount.tsx";
import Invitations from "./pages/Invitations.tsx";
import InvitationTypes from "./pages/InvitationTypes.tsx";
import InvitationDetails from "./pages/InvitationDetails.tsx";

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
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/invitation-types" element={<InvitationTypes />} />
          <Route path="/invitation-details" element={<InvitationDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;