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
        className={`relative transition-all duration-500 shadow-lg cursor-pointer
          ${
            active
              ? `
                w-11/12 sm:w-9/12 lg:w-7/12
                h-[40vh] sm:h-[50vh] landscape:h-[60vh]
                bg-[#642a38]              /* Merlot */
                rounded-3xl
                p-6
                flex flex-col
              `
              : `
                w-10/12 sm:w-8/12
                h-20 sm:h-24 landscape:h-28
                bg-[#e1d5c9]              /* Echo */
                rounded-full
                flex items-center justify-between
                px-6
                hover:bg-[#ab958a]       /* Rustic */
              `
          }`}
      >
        {/* ---------------- COLLAPSED VIEW ---------------- */}
        {!active && (
          <>
            <span
              className="text-lg sm:text-xl font-semibold tracking-wide text-[#642a38]"
              onClick={() => setActiveCard("legacy")}
            >
              Legacy Highlights
            </span>

            <button
              onClick={() => setActiveCard("legacy")}
              className="
                p-2 sm:p-3 rounded-full
                bg-[#642a38]
                hover:bg-[#5a2431]
                transition
              "
            >
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#ece8df]" />
            </button>
          </>
        )}

        {/* ---------------- EXPANDED VIEW ---------------- */}
        {active && (
          <>
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#ece8df]">
                Legacy Highlights
              </h2>

              <button
                onClick={() => setActiveCard(null)}
                className="
                  p-2 sm:p-3 rounded-full
                  bg-[#ab958a]
                  hover:bg-[#ece8df]
                  transition
                "
              >
                <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#642a38]" />
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-[#ab958a] mt-2 mb-2 text-center tracking-wide">
              OUR LEGACY
            </h3>

            {/* Scrollable Content */}
            <div
              className="
                flex-1 overflow-y-auto pr-4 mt-2
                scrollbar-thin
                scrollbar-thumb-[#ab958a]
                scrollbar-track-[#642a38]
              "
            >
              <p className="leading-relaxed text-[#ece8df] text-sm sm:text-base">
                Being a platform for students to express their thoughts without the
                fear of being judged and improving themselves in every aspect of
                life, LitClub has stood strong in the limelight for more than ten
                years. The club sculpts young readers into future leaders of the
                nation.
              </p>

              <p className="leading-relaxed text-[#ece8df] mt-4 font-semibold text-sm sm:text-base">
                Significant Events and Achievements:
              </p>

              <p className="leading-relaxed text-[#ece8df] mt-2 text-sm sm:text-base">
                Battle Lit Out and Potpourri were frequently held to bring out the
                competitive spirit within the college, conducted during flagship
                events like Agni and Kurukshetra.
              </p>

              <p className="leading-relaxed text-[#ece8df] mt-2 text-sm sm:text-base">
                Inter-college quizzes, MUN-style committees, and collaborative
                discussion events with institutions like VIT Chennai helped
                students gain confidence in public speaking and debate formats.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LegacyCard;
