"use client";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const LegacyCard = ({
  active,
  setActiveCard,
}: {
  active: boolean;
  setActiveCard: (v: string | null) => void;
}) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`relative transition-all duration-500 shadow-lg
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
              className="text-xl font-semibold tracking-wide cursor-pointer text-[#012D20] hover:text-[#EDE0D4]"
              onClick={() => setActiveCard("legacy")}
            >
              Legacy Highlights
            </span>
            <button
              onClick={() => setActiveCard("legacy")}
              className="p-2 rounded-full bg-[#012D20] cursor-pointer hover:bg-[#FBE8D8] transition"
            >
              <ArrowDown className="w-5 h-5 text-[#7A806C]" />
            </button>
          </>
        )}

        {/* Expanded View */}
        {active && (
          <>
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#EDE0D4] tracking-wide">
                Legacy Highlights
              </h2>
              <button
                onClick={() => setActiveCard(null)}
                className="p-2 rounded-full bg-[#E5C7B1] hover:bg-[#034235] transition"
              >
                <ArrowUp className="w-5 h-5 text-[#7A705C]" />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-[#E5C7B1] mt-2 mb-2 text-center">
              OUR LEGACY
            </h3>

            {/* Scrollable Text Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#E5C7B1] scrollbar-track-[#7A806C] pr-4">
              <p className="leading-relaxed text-[#EDE0D4]">
                Being a platform for students to express their thoughts without the
                fear of being judged and improving themselves in every aspect of
                life, LitClub has stood strong in the limelight for more than ten
                years. The club sculpts young readers into future leaders of the
                nation. The Literary Club conducts both inter-college and
                intra-college events, which have earned the club recognition among
                premier institutions of Chennai.
              </p>

              <p className="leading-relaxed text-[#EDE0D4] mt-4 font-semibold">
                Significant Events and Achievements of LitClub:
              </p>

              <p className="leading-relaxed text-[#EDE0D4] mt-2">
                Since the birth of the club, Battle Lit Out and Potpourri, two
                intra-college events, were frequently held to bring out the
                competitive spirit within the college. Potpourri was organized
                during Agni and Battle Lit Out during Kurukshetra to showcase the
                essence of LitClub to the freshers.
              </p>

              <p className="leading-relaxed text-[#EDE0D4] mt-2">
                The club conducted an Inter-College Quiz in association with TAMPI
                University on 8th October 2017 and a Joint Crisis Committee (MUN) in
                February 2019 to introduce participants to the formats of
                questioning and public speaking. Consortium was a group discussion
                event organized with the Debate Society of VIT Chennai in 2020 to
                prepare students for professional discussions and debates.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LegacyCard;
