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
            onClick={() => setActiveCard("who")}
          >
            Who We Are
          </span>

          <button
            onClick={() => setActiveCard("who")}
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
              Who We Are
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
              font-semibold
              text-[#ab958a]
              mt-2 mb-4
              text-center
            "
          >
            ABOUT US
          </h3>

          {/* Scrollable Content */}
          <div
            className="
              flex-1
              overflow-y-auto
              pr-4
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
              The Literary Club of Anna University is one of the most reputed
              clubs of the varsity, with over ten years of service. We are a
              voice — a community that lifts and grows together, bonding
              individuals who carry a spark and a passion for their craft.
              <br /><br />
              We give them the space and the tools to revolutionize, to take
              leaps, and to aim for the moon — even if they land among the
              stars. Above all, we strive to create a family of learners and
              enthusiasts, nurturing creativity and accelerating growth.
            </p>
          </div>
        </>
      )}
    </div>
  </div>
);

export default WhoCard;
