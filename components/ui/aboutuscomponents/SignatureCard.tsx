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
      className={`relative transition-all duration-500 shadow-lg font-argesta cursor-pointer
        ${
          active
            ? `
              w-11/12 sm:w-9/12 lg:w-7/12
              h-[40vh] sm:h-[50vh] landscape:h-[60vh]
              bg-[#642a38]          /* Merlot */
              rounded-3xl
              p-6
              flex flex-col
            `
            : `
              w-10/12 sm:w-8/12
              h-20 sm:h-24 landscape:h-28
              bg-[#e1d5c9]          /* Echo */
              rounded-full
              flex items-center justify-between
              px-6
              hover:bg-[#ab958a]   /* Rustic */
            `
        }`}
    >
      {/* ---------------- COLLAPSED VIEW ---------------- */}
      {!active && (
        <>
          <span
            className="
              text-lg sm:text-xl
              font-semibold
              tracking-wide
              text-[#642a38]
              transition-colors
            "
            onClick={() => setActiveCard("story")}
          >
            Signature Events
          </span>

          <button
            onClick={() => setActiveCard("story")}
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
            <h2
              className="
                text-xl sm:text-2xl
                font-bold
                tracking-wide
                text-[#ece8df]
              "
            >
              Signature Events
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

          {/* Subheading */}
          <h3
            className="
              text-base sm:text-lg
              text-center
              font-semibold
              text-[#ab958a]
              mt-2
            "
          >
            Signature Events
          </h3>

          {/* Scrollable Content */}
          <div
            className="
              flex-1
              overflow-y-auto
              mt-4 pr-4
              scrollbar-thin
              scrollbar-thumb-[#ab958a]
              scrollbar-track-[#5a2431]
            "
          >
            <p
              className="
                leading-relaxed
                text-[#ece8df]
                text-sm sm:text-base
              "
            >
              LitClub conducts a variety of exciting and skill-building events
              throughout the years. Its iconic Icebreaker helps freshers break
              the silence and get comfortable, while Shipwreck nurtures their
              convincing skills as they try to save themselves from a sinking
              ship. The Murder Mystery event challenges participants to think
              like detectives and solve complex cases.
            </p>

            <p
              className="
                leading-relaxed
                text-[#ece8df]
                mt-3
                text-sm sm:text-base
              "
            >
              The Fandom Quiz tests knowledge of films, characters, and stories,
              while Bibliophiles caters to book lovers who wish to explore many
              well-written works. The club also conducts Model United Nations
              (MUN), giving students the chance to act as country delegates and
              voice global concerns. Weekly online events throughout the year
              keep the spirit of creativity and participation alive.
            </p>
          </div>
        </>
      )}
    </div>
  </div>
);

export default SignatureCard;
