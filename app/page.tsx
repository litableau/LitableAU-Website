import { Navbar } from "@/components/ui/navbar";
import { LitClubHero } from "@/components/ui/lit-club-hero";
import { AboutSection } from "@/components/ui/about-section";
import { InstaCarousel } from "@/components/ui/insta-carousel";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e1d5c9] text-[#642a38]">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-16">
        <LitClubHero />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Instagram Carousel */}
      <InstaCarousel />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
