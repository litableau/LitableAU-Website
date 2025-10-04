"use client";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const MissionCard = ({
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
            : "w-8/12 h-20 bg-[#EDE0D4] rounded-full flex items-center justify-between px-6 hover:bg-[#6B705C] hover:text-[#EDE0D4]"
        }`}
    >
      {/* Collapsed View */}
      {!active && (
        <>
          <span
            className="text-xl font-semibold tracking-wide cursor-pointer text-[#012D20] hover:text-[#EDE0D4] font-argesta"
            onClick={() => setActiveCard("mission")}
          >
            Mission & Vision
          </span>
          <button
            onClick={() => setActiveCard("mission")}
            className="p-2 rounded-full bg-[#012D20] cursor-pointer hover:bg-[#EDE0D4] transition"
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
              Mission & Vision
            </h2>
            <button
              onClick={() => setActiveCard(null)}
              className="p-2 rounded-full bg-[#E5C7B1] hover:bg-[#FBE8D8] transition"
            >
              <ArrowUp className="w-5 h-5 text-[#012D20]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#EDE0D4] scrollbar-track-[#6B705C] mt-4 pr-4">
            <h3 className="text-lg font-semibold text-[#E5C7B1] mb-2 text-center font-argesta">
              Mission and Vision
            </h3>
            <p className="leading-relaxed text-[#F5F5DC] mb-6 font-argesta">
              The Literary Club of Anna University aims to create a space where expression and innovation
bloom– where the fine arts of every kind have a seat at the table. To not only explore but
expand our palette, to form real connections over everything language and arts, to finally simply
be a museum of creation and inspiration.
We conduct events, we let the youth write their mind– everybody, whether to be a witness or
participate or quite simply, to learn– you’ll find your voice with us. The words, the voice will
always be yours. We’re to give it a platform. We have our members across all campuses,
working together to bring to life all the unsaid, unwritten talent hidden in plain sight.

            </p>
            
            
          </div>
        </>
      )}
    </div>
  </div>
);

export default MissionCard;
