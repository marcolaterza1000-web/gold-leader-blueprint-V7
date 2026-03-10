import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import AboutMarco from "@/components/AboutMarco";
import MethodSection from "@/components/MethodSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import ResultsSection from "@/components/ResultsSection";
import TransformationGallery from "@/components/TransformationGallery";
import LocationsSection from "@/components/LocationsSection";
import GoogleReviews from "@/components/GoogleReviews";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

/**
 * Page order (conversion-optimised):
 * 1. Hero                — Above fold, dominant image, primary CTA
 * 2. StatsBar            — Immediate social proof (numbers)
 * 3. TrustBar            — Logos / institutional trust
 * 4. ProblemSection      — Pain agitation
 * 5. AboutMarco          — Trust / credibility
 * 6. MethodSection       — Das ML-System (Training · Ernährung · Mindset)
 * 7. VideoTestimonials   — "Ergebnisse, die für sich sprechen" (YouTube grid)
 * 8. ResultsSection      — Written testimonials with data points
 * 9. TransformationGallery — Visual before/after
 * 10. LocationsSection   — Zürich City · Enge · Seefeld
 * 11. GoogleReviews      — Additional social proof
 * 12. BookingSection     — Primary conversion (Calendly)
 * 13. FAQSection         — Objection handling
 * 14. Footer
 */
const Index = () => (
  <div className="min-h-screen bg-[#0a0a0a]">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <TrustBar />
    <ProblemSection />
    <AboutMarco />
    <MethodSection />
    <VideoTestimonials />
    <ResultsSection />
    <TransformationGallery />
    <LocationsSection />
    <GoogleReviews />
    <BookingSection />
    <FAQSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
