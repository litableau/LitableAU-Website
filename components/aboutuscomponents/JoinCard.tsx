"use client";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const JoinCard = ({
  active,
  setActiveCard,
}: {
  active: boolean;
  setActiveCard: (v: string | null) => void;
}) => (
  <div className="w-full flex justify-center">
    <div
      className={`relative transition-all duration-500 shadow-lg
        ${
          active
            ? "w-11/12 h-[40vh] bg-[#012D20] rounded-3xl p-6 flex flex-col"
            : "w-8/12 h-20 bg-[#EDE0D4] rounded-full flex items-center justify-between px-6 hover:bg-[#7A806C] hover:text-[#EDE0D4]"
        }`}
      onClick={() => !active && setActiveCard("join")}
    >
      {/* Collapsed View */}
      {!active && (
        <>
          <span className="text-xl font-semibold tracking-wide cursor-pointer text-[#012D20] hover:text-[#EDE0D4] transition-colors">
            Join Us
          </span>
          <button className="p-2 rounded-full bg-[#012D20] cursor-pointer hover:bg-[#FBE8D8] transition">
            <ArrowDown className="w-5 h-5 text-[#7A806C]" />
          </button>
        </>
      )}

      {/* Expanded View */}
      {active && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#EDE0D4] tracking-wide">
              Join Us
            </h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveCard(null);
              }}
              className="p-2 rounded-full bg-[#E5C7B1] hover:bg-[#FBE8D8] transition"
            >
              <ArrowUp className="w-5 h-5 text-[#7A705C]" />
            </button>
          </div>

          <h3 className="text-lg font-semibold text-[#E5C7B1] mt-2 mb-4 text-center">
            BE A PART OF THE LEGACY!
          </h3>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            <a
              href="https://www.instagram.com/litclubau?igsh=N3doa20xZnRhMnZs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#E5C7B1] text-[#012D20] text-lg px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#FBE8D8] hover:scale-105 transition duration-300">
                Click
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  </div>
);

export default JoinCard;
