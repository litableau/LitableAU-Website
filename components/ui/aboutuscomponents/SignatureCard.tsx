"use client";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const SignatureCard = ({
  active,
  setActiveCard,
}: {
  active: boolean;
  setActiveCard: (v: string | null) => void;
}) => (
  <div className="w-full flex justify-center">
    <div
      className={`relative transition-all duration-500 shadow-lg font-argesta
      ${
        active
          ? "w-11/12 h-[40vh] bg-[#012D20] rounded-3xl p-6 flex flex-col"
          : "w-8/12 h-20 bg-[#FBE8D8] rounded-full flex items-center justify-between px-6 hover:bg-[#7A806C] hover:text-[#FBE8D8]"
      }`}
    >
      {/* Collapsed View */}
      {!active && (
        <>
          <span
            className="text-xl font-semibold tracking-wide cursor-pointer text-[#012D20] hover:text-[#FBE8D8] font-argesta"
            onClick={() => setActiveCard("story")}
          >
            Signature Events
          </span>
          <button
            onClick={() => setActiveCard("story")}
            className="p-2 rounded-full bg-[#012D20] cursor-pointer hover:bg-[#FBE8D8] transition"
          >
            <ArrowDown className="w-5 h-5 text-[#7A806C]" />
          </button>
        </>
      )}

      {/* Expanded View */}
      {active && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#FBE8D8] tracking-wide font-argesta">
              Signature Events Section
            </h2>
            <button
              onClick={() => setActiveCard(null)}
              className="p-2 rounded-full bg-[#E5C7B1] hover:bg-[#FBE8D8] transition"
            >
              <ArrowUp className="w-5 h-5 text-[#012D20]" />
            </button>
          </div>

          {/* Subheading */}
          <h3 className="text-lg text-center font-semibold text-[#E5C7B1] mt-2 font-argesta">
            Signature Events
          </h3>

          {/* Text Only */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#E5C7B1] scrollbar-track-[#012D20] pr-2 mt-4">
            <p className="leading-relaxed text-[#FBE8D8] font-argesta">
              LitClub conducts a variety of exciting and skill-building events throughout the years. Its iconic Icebreaker helps freshers break
              the silence and get comfortable, while Shipwreck nurtures their
              convincing skills as they try to save themselves from a sinking
              ship. The Murder Mystery event challenges participants to think
              like detectives and solve complex cases. 
             </p>

             
             <p className="leading-relaxed text-[#FBE8D8] font-argesta">
              The Fandom Quiz tests
              knowledge of films, characters, and stories, while Bibliophiles
              caters to book lovers who wish to explore among many well-written
              works. The club also conducts Model United Nations (MUN), giving
              students the chance to act as country delegates and voice global
              concerns. Along with these, weekly online events are organized
              throughout the year, keeping the spirit of creativity and
              participation alive.
            </p>
          </div>
        </>
      )}
    </div>
  </div>
);

export default SignatureCard;
