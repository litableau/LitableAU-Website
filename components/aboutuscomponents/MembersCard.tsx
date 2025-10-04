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
      className={`relative transition-all duration-500 shadow-lg overflow-hidden ${
        active
          ? "w-11/12 h-[350px] bg-[#012D20] rounded-3xl p-4 flex flex-col"
          : "w-8/12 h-20 bg-[#EDE0D4] rounded-full flex items-center justify-between px-6 hover:bg-[#7A806C] hover:text-[#EDE0D4]"
      }`}
    >
      {/* Collapsed View */}
      {!active && (
        <>
          <span
            className="text-xl font-semibold tracking-wide cursor-pointer text-[#012D20] hover:text-[#EDE0D4]"
            onClick={() => setActiveCard("members")}
          >
            Members Highlight
          </span>
          <button
            onClick={() => setActiveCard("members")}
            className="p-2 rounded-full bg-[#012D20] cursor-pointer hover:bg-[#FBE8D8] transition"
          >
            <ArrowDown className="w-5 h-5 text-[#7A806C]" />
          </button>
        </>
      )}

      {/* Expanded View */}
      {active && (
        <>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-[#EDE0D4] tracking-wide">
              Members Highlight
            </h2>
            <button
              onClick={() => setActiveCard(null)}
              className="p-1 rounded-full bg-[#E5C7B1] hover:bg-[#FBE8D8] transition"
            >
              <ArrowUp className="w-4 h-4 text-[#7A705C]" />
            </button>
          </div>

          <h3 className="text-sm font-semibold text-[#E5C7B1] mb-4 text-center">
            OUR TEAM
          </h3>

          {/* Gallery Section */}
          <div className="flex flex-1 flex-col items-center justify-center w-full h-full relative">
            {/* Left Arrow for previous */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#E5C7B1] p-3 rounded-full hover:bg-[#FBE8D8] shadow-lg z-30"
            >
              <ArrowLeft className="w-6 h-6 text-[#7A705C]" />
            </button>

            {/* Right Arrow for next */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % members.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#E5C7B1] p-3 rounded-full hover:bg-[#FBE8D8] shadow-lg z-30"
            >
              <ArrowRight className="w-6 h-6 text-[#7A705C]" />
            </button>

            <div className="relative flex justify-center items-center w-full h-[220px]">
              {/* Previous member card (left) */}
              <div
                className="flex flex-col items-center justify-center
                  relative scale-90 opacity-60 transform -rotate-6 bg-[#6B705C] rounded-2xl shadow-lg w-[150px] h-[180px]
                  mr-[-60px] z-10"
              >
                <img
                  src={members[(currentIndex - 1 + members.length) % members.length].img}
                  alt="Previous Member"
                  className="w-[120px] h-[120px] object-cover rounded-xl mt-4"
                />
                <div className="text-center text-[#E5C7B1] text-xs mt-2 w-full truncate">
                  {members[(currentIndex - 1 + members.length) % members.length].name}
                </div>
              </div>

              {/* Current member card (center) */}
              <div
                className="flex flex-col items-center justify-center
                  relative bg-[#6B705C] rounded-2xl shadow-xl w-[180px] h-[220px] border-4 border-[#EDE0D4] z-20"
              >
                <img
                  src={members[currentIndex].img}
                  alt="Current Member"
                  className="w-[150px] h-[150px] object-cover rounded-xl mt-4"
                />
                <div className="text-center text-white text-sm mt-2 font-semibold truncate">
                  {members[currentIndex].name}
                </div>
                <div className="text-center text-[#EDE0D4] text-xs opacity-90 truncate">
                  {members[currentIndex].post}
                </div>
              </div>

              {/* Next member card (right) */}
              <div
                className="flex flex-col items-center justify-center
                  relative scale-90 opacity-60 transform rotate-6 bg-[#6B705C] rounded-2xl shadow-lg w-[150px] h-[180px]
                  ml-[-60px] z-10"
              >
                <img
                  src={members[(currentIndex + 1) % members.length].img}
                  alt="Next Member"
                  className="w-[120px] h-[120px] object-cover rounded-xl mt-4"
                />
                <div className="text-center text-[#E5C7B1] text-xs mt-2 w-full truncate">
                  {members[(currentIndex + 1) % members.length].name}
                </div>
              </div>
            </div>

            {/* Member's name & post display below */}
            <div className="mt-6 text-[#283618] text-lg font-serif font-semibold truncate">
              {members[currentIndex].name}
            </div>
            <div className="text-[#6B705C] text-sm truncate">{members[currentIndex].post}</div>
          </div>
        </>
      )}
    </div>
  </div>
);

export default MembersCard;
