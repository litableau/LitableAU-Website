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
      className={`relative transition-all duration-500 shadow-lg cursor-pointer
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
      onClick={() => !active && setActiveCard("join")}
    >
      {/* ---------------- COLLAPSED VIEW ---------------- */}
      {!active && (
        <>
          <span className="text-lg sm:text-xl font-semibold tracking-wide text-[#642a38]">
            Join Us
          </span>

          <button
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
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#ece8df]">
              Join Us
            </h2>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveCard(null);
              }}
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

          <h3 className="text-base sm:text-lg font-semibold text-[#ab958a] mt-2 mb-4 text-center tracking-wide">
            BE A PART OF THE LEGACY
          </h3>

          <div className="flex-1 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
            <a
              href="https://www.instagram.com/litclubau?igsh=N3doa20xZnRhMnZs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="
                  bg-[#ece8df]
                  text-[#642a38]
                  text-base sm:text-lg
                  px-6 sm:px-8
                  py-2 sm:py-3
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:bg-white
                  hover:scale-105
                  transition duration-300
                "
              >
                Join Now
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  </div>
);

export default JoinCard;
