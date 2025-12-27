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
            onClick={() => setActiveCard("mission")}
          >
            Mission & Vision
          </span>

          <button
            onClick={() => setActiveCard("mission")}
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
              Mission & Vision
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
            <h3
              className="
                text-base sm:text-lg
                font-semibold
                text-[#ab958a]
                mb-2
                text-center
              "
            >
              Mission and Vision
            </h3>

            <p
              className="
                leading-relaxed
                text-[#ece8df]
                text-sm sm:text-base
              "
            >
              The Literary Club of Anna University aims to create a space where
              expression and innovation bloom — where the fine arts of every kind
              have a seat at the table. To not only explore but expand our palette,
              to form real connections over everything language and arts, to finally
              simply be a museum of creation and inspiration.
              <br /><br />
              We conduct events, we let the youth write their mind — everybody,
              whether to be a witness or participate or quite simply, to learn —
              you’ll find your voice with us. The words, the voice will always be
              yours. We’re here to give it a platform. We have our members across
              all campuses, working together to bring to life all the unsaid,
              unwritten talent hidden in plain sight.
            </p>
          </div>
        </>
      )}
    </div>
  </div>
);

export default MissionCard;
