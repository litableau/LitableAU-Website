"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { LitClubHero } from "@/components/ui/lit-club-hero";
import { AboutSection } from "@/components/ui/about-section";
import { InstaCarousel } from "@/components/ui/insta-carousel";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // 🔹 Show popup ONCE per session (tab)
  useEffect(() => {
      setShowPopup(true);
  }, []);

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
