"use client";
import React from "react";
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from "lucide-react";

type MembersCardProps = {
  active: boolean;
  setActiveCard: (v: string | null) => void;
  members: Array<{ img: string; name: string; post: string }>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const MembersCard: React.FC<MembersCardProps> = ({
  active,
  setActiveCard,
  members,
  currentIndex,
  setCurrentIndex
}) => (
  <div className="w-full flex justify-center">
    <div
      className={`relative transition-all duration-500 shadow-lg overflow-hidden cursor-pointer
        ${
          active
            ? `
              w-11/12 h-[350px]
              bg-[#642a38]          /* Merlot */
              rounded-3xl
              p-4
              flex flex-col
            `
            : `
              w-8/12 h-20
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
            className="text-xl font-semibold tracking-wide text-[#642a38]"
            onClick={() => setActiveCard("members")}
          >
            Members Highlight
          </span>

          <button
            onClick={() => setActiveCard("members")}
            className="
              p-2 rounded-full
              bg-[#642a38]
              hover:bg-[#5a2431]
              transition
            "
          >
            <ArrowDown className="w-5 h-5 text-[#ece8df]" />
          </button>
        </>
      )}

      {/* ---------------- EXPANDED VIEW ---------------- */}
      {active && (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold tracking-wide text-[#ece8df]">
              Members Highlight
            </h2>

            <button
              onClick={() => setActiveCard(null)}
              className="
                p-1 rounded-full
                bg-[#ab958a]
                hover:bg-[#ece8df]
                transition
              "
            >
              <ArrowUp className="w-4 h-4 text-[#642a38]" />
            </button>
          </div>

          <h3 className="text-sm font-semibold text-[#ab958a] mb-4 text-center tracking-wide">
            OUR TEAM
          </h3>

          {/* ---------------- GALLERY ---------------- */}
          <div className="flex flex-1 flex-col items-center justify-center w-full h-full relative">
            {/* Left Arrow */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
              }
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                bg-[#ab958a]
                hover:bg-[#ece8df]
                p-3 rounded-full
                shadow-lg z-30
              "
            >
              <ArrowLeft className="w-6 h-6 text-[#642a38]" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % members.length)
              }
              className="
                absolute right-0 top-1/2 -translate-y-1/2
                bg-[#ab958a]
                hover:bg-[#ece8df]
                p-3 rounded-full
                shadow-lg z-30
              "
            >
              <ArrowRight className="w-6 h-6 text-[#642a38]" />
            </button>

            <div className="relative flex justify-center items-center w-full h-[220px]">
              {/* Previous */}
              <div
                className="
                  flex flex-col items-center justify-center
                  scale-90 opacity-60 -rotate-6
                  bg-[#ab958a]
                  rounded-2xl shadow-lg
                  w-[150px] h-[180px]
                  mr-[-60px] z-10
                "
              >
                <img
                  src={members[(currentIndex - 1 + members.length) % members.length].img}
                  alt="Previous Member"
                  className="w-[120px] h-[120px] object-cover rounded-xl mt-4"
                />
                <div className="text-center text-[#642a38] text-xs mt-2 w-full truncate">
                  {members[(currentIndex - 1 + members.length) % members.length].name}
                </div>
              </div>

              {/* Current */}
              <div
                className="
                  flex flex-col items-center justify-center
                  bg-[#ece8df]
                  rounded-2xl shadow-xl
                  w-[180px] h-[220px]
                  border-4 border-[#ab958a]
                  z-20
                "
              >
                <img
                  src={members[currentIndex].img}
                  alt="Current Member"
                  className="w-[150px] h-[150px] object-cover rounded-xl mt-4"
                />
                <div className="text-center text-[#642a38] text-sm mt-2 font-semibold truncate">
                  {members[currentIndex].name}
                </div>
                <div className="text-center text-[#642a38]/80 text-xs truncate">
                  {members[currentIndex].post}
                </div>
              </div>

              {/* Next */}
              <div
                className="
                  flex flex-col items-center justify-center
                  scale-90 opacity-60 rotate-6
                  bg-[#ab958a]
                  rounded-2xl shadow-lg
                  w-[150px] h-[180px]
                  ml-[-60px] z-10
                "
              >
                <img
                  src={members[(currentIndex + 1) % members.length].img}
                  alt="Next Member"
                  className="w-[120px] h-[120px] object-cover rounded-xl mt-4"
                />
                <div className="text-center text-[#642a38] text-xs mt-2 w-full truncate">
                  {members[(currentIndex + 1) % members.length].name}
                </div>
              </div>
            </div>

            {/* Name & Post */}
            <div className="mt-6 text-[#ece8df] text-lg font-serif font-semibold truncate">
              {members[currentIndex].name}
            </div>
            <div className="text-[#ab958a] text-sm truncate">
              {members[currentIndex].post}
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

export default MembersCard;
