"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { LitClubHero } from "@/components/ui/lit-club-hero";
import { AboutSection } from "@/components/ui/about-section";
import { InstaCarousel } from "@/components/ui/insta-carousel";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";
import { RedirectPopup } from "@/components/RedirectPopUp";

const REDIRECT_URL = "https://litablaze.vercel.app/";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // 🔹 Show popup ONCE per session (tab)
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("litablaze-popup-seen");

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("litablaze-popup-seen", "true");
    }
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

      {/* Popup */}
      <RedirectPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        redirectUrl={REDIRECT_URL}
      />
    </main>
  );
}
