"use client";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const WhoCard = ({
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
          : "w-8/12 h-20 bg-[#EDE0D4] rounded-full flex items-center justify-between px-6 hover:bg-[#7A806C] hover:text-[#EDE0D4]"
      }`}
    >
      {/* Collapsed View */}
      {!active && (
        <>
          <span
            className="text-xl font-semibold tracking-wide cursor-pointer text-[#012D20] hover:text-[#EDE0D4] font-argesta"
            onClick={() => setActiveCard("who")}
          >
            Who We Are
          </span>
          <button
            onClick={() => setActiveCard("who")}
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
            <h2 className="text-2xl font-bold text-[#EDE0D4] tracking-wide font-argesta">
              Who We Are
            </h2>
            <button
              onClick={() => setActiveCard(null)}
              className="p-2 rounded-full bg-[#E5C7B1] hover:bg-[#FBE8D8] transition"
            >
              <ArrowUp className="w-5 h-5 text-[#7A806C]" />
            </button>
          </div>

          <h3 className="text-lg font-semibold text-[#E5C7B1] mt-2 mb-4 text-center font-argesta">
            ABOUT US
          </h3>

          {/* Text Only */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#E5C7B1] scrollbar-track-[#7A806C] pr-2">
            <p className="leading-relaxed text-[#EDE0D4] font-argesta">
              The Literary Club of Anna University is one of the most reputed
              clubs of the varsity, with over ten years of service. We are a
              voice– we’re a community that lifts and grows together, that
              brings and bonds individuals who have a spark, who move about with
              a passion for their craft. We give them the space and the tools,
              to revolutionize, to take leaps and to aim for the moon. You might
              just still land on the stars. We’re here to create, most of all, a
              family of learners and enthusiasts– to nurture creativity and
              accelerate growth.
            </p>
          </div>
        </>
      )}
    </div>
  </div>
);

export default WhoCard;
