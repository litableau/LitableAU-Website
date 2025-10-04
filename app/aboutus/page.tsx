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
    <section id="about1">
      <div
  className="
    min-h-screen flex flex-col font-argesta 
    bg-[url('/Background_mobile.png')] md:bg-[url('/Background.jpg')] 
    bg-contain md:bg-cover bg-left-top bg-no-repeat
  "
>

        <Navbar />

        {/* Spacer to offset fixed navbar */}
        <div className="h-16 md:h-20"></div>

        {/* Header */}
        <div className="text-center my-6 sm:my-10 px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#012D20] tracking-widest leading-snug">
            ABOUT US
          </h1>
        </div>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 px-4 sm:px-8 lg:px-16 mb-8 sm:mb-12">
          <SignatureCard active={activeCard === "story"} setActiveCard={setActiveCard} />
          <MissionCard active={activeCard === "mission"} setActiveCard={setActiveCard} />
          <WhoCard active={activeCard === "who"} setActiveCard={setActiveCard} />
          <LegacyCard active={activeCard === "legacy"} setActiveCard={setActiveCard} />

          {/* JoinCard centered on larger screens */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full sm:w-[70%] md:w-[80%] lg:w-[50%]">
              <JoinCard active={activeCard === "join"} setActiveCard={setActiveCard} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default AboutUs;
