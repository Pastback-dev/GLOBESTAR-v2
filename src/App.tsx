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
import AvailableVisas from "./pages/AvailableVisas.tsx";
import VisitingVisa from "./pages/VisitingVisa.tsx";
import StudyingVisa from "./pages/StudyingVisa.tsx";
import CompanyRegistration from "./pages/CompanyRegistration.tsx";
import CompanyRegistrationForm from "./pages/CompanyRegistrationForm.tsx";
import BusinessImmigration from "./pages/BusinessImmigration.tsx";
import Contact from "./pages/Contact.tsx";
import PaymentSuccess from "./pages/PaymentSuccess.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* About */}
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/bank-account" element={<BankAccount />} />

            {/* Invitations */}
            <Route path="/types-of-invitation" element={<TypesOfInvitation />} />
            <Route path="/details-and-costs" element={<DetailsAndCosts />} />
            <Route path="/apply-invitation" element={<ApplyInvitation />} />

            {/* Visas */}
            <Route path="/available-visas" element={<AvailableVisas />} />
            <Route path="/visiting-visa" element={<VisitingVisa />} />
            <Route path="/studying-visa" element={<StudyingVisa />} />

            {/* Company Registration */}
            <Route path="/company-registration" element={<CompanyRegistration />} />
            <Route path="/company-registration-form" element={<CompanyRegistrationForm />} />

            {/* Immigration */}
            <Route path="/business-immigration" element={<BusinessImmigration />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Payment */}
            <Route path="/payment-success" element={<PaymentSuccess />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;