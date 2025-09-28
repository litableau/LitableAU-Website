import { Navbar } from "@/components/ui/navbar";
import { LitClubHero } from "@/components/ui/lit-club-hero";
import { AboutSection } from "@/components/ui/about-section";
import { Footer } from "@/components/ui/footer";
 

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(229,199,177)] text-[#2f4f4f]">
      <Navbar />
      
      {/* Hero Section with Scroll Animation */}
      <div className="pt-16">
        <LitClubHero />
      </div>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Events moved to dedicated /events page */}

      {/* Gallery and Contact moved to dedicated pages */}
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
