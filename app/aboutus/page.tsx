"use client";
import React, { useState } from "react";

import SignatureCard from "@/components/ui/aboutuscomponents/SignatureCard";
import MissionCard from "@/components/ui/aboutuscomponents/MissionCard";
import WhoCard from "@/components/ui/aboutuscomponents/WhoCard";
import LegacyCard from "@/components/ui/aboutuscomponents/LegacyCard";
import JoinCard from "@/components/ui/aboutuscomponents/JoinCard";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const AboutUs: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="about1" className="relative overflow-hidden">
      {/* ✅ BACKGROUND CHANGED TO IVORY */}
      <div className="min-h-screen flex flex-col font-argesta text-[#642a38] relative bg-[#ece8df]">

        {/* ================= DARK FAST MERLOT PARTICLES ================= */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
          <div className="particle p5"></div>
          <div className="particle p6"></div>
        </div>

        {/* Navbar */}
        <Navbar />
        <div className="h-16 md:h-20 relative z-10"></div>

        {/* Header */}
        <div className="text-center my-6 sm:my-10 px-4 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-widest">
            ABOUT US
          </h1>
        </div>

        {/* Cards */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-4 lg:gap-6
            px-4 sm:px-8 lg:px-16
            mb-8 sm:mb-12
            relative z-10
          "
        >
          <SignatureCard active={activeCard === "story"} setActiveCard={setActiveCard} />
          <MissionCard active={activeCard === "mission"} setActiveCard={setActiveCard} />
          <WhoCard active={activeCard === "who"} setActiveCard={setActiveCard} />
          <LegacyCard active={activeCard === "legacy"} setActiveCard={setActiveCard} />

          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full sm:w-[70%] md:w-[80%] lg:w-[50%]">
              <JoinCard active={activeCard === "join"} setActiveCard={setActiveCard} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* ================= PARTICLE STYLES ================= */}
      <style jsx>{`
        .particle {
          position: absolute;
          border-radius: 9999px;
          background: #642a38; /* merlot */
          opacity: 0.28;
          filter: blur(1px);
          animation: fastFloat linear infinite;
        }

        .p1 { width: 90px; height: 90px; top: 8%; left: 4%; animation-duration: 14s; }
        .p2 { width: 70px; height: 70px; top: 22%; right: 8%; animation-duration: 12s; }
        .p3 { width: 55px; height: 55px; bottom: 18%; left: 12%; animation-duration: 11s; }
        .p4 { width: 80px; height: 80px; bottom: 12%; right: 18%; animation-duration: 15s; }
        .p5 { width: 65px; height: 65px; top: 55%; left: 58%; animation-duration: 13s; }
        .p6 { width: 40px; height: 40px; top: 38%; right: 42%; animation-duration: 10s; }

        @keyframes fastFloat {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          50% {
            transform: translate(140px, -120px) scale(1.25) rotate(180deg);
          }
          100% {
            transform: translate(280px, -240px) scale(1) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
