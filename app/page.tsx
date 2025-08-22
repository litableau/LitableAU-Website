import { Navbar } from "@/components/ui/navbar";
import { LitClubHero } from "@/components/ui/lit-club-hero";
import { AboutSection } from "@/components/ui/about-section";
import { ActivitiesSection } from "@/components/ui/activities-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5DC] dark:bg-[#8B7355]">
      <Navbar />
      
      {/* Hero Section with Scroll Animation */}
      <div className="pt-16">
        <LitClubHero />
      </div>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Activities Section */}
      <ActivitiesSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
