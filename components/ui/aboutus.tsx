"use client";
import React, { useState } from "react";
import SignatureCard from "./aboutuscomponents/SignatureCard";
import MissionCard from "./aboutuscomponents/MissionCard";
import WhoCard from "./aboutuscomponents/WhoCard";
import LegacyCard from "./aboutuscomponents/LegacyCard";
import JoinCard from "./aboutuscomponents/JoinCard";



const AboutUs: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="about1">
    <div
      className="min-h-screen flex flex-col font-argesta 
                 bg-[url('/Background.jpg')] bg-top-left sm:bg-center bg-cover bg-no-repeat"
    >
      

      {/* Header */}
      <div className="text-center my-6 sm:my-10 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#012D20] tracking-widest leading-snug">
          ABOUT US
        </h1>
      </div>

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8 mb-8 sm:mb-12">
        <SignatureCard active={activeCard === "story"} setActiveCard={setActiveCard} />
        <MissionCard active={activeCard === "mission"} setActiveCard={setActiveCard} />
        <WhoCard active={activeCard === "who"} setActiveCard={setActiveCard} />
        <LegacyCard active={activeCard === "legacy"} setActiveCard={setActiveCard} />

        {/* JoinCard centered on desktop */}
        <div className="sm:col-span-2 flex justify-center">
          <div className="w-full sm:w-[70%] lg:w-[50%]">
            <JoinCard active={activeCard === "join"} setActiveCard={setActiveCard} />
          </div>
        </div>
      </div>

      
    </div>
    </section>
  );
};

export default AboutUs;
