"use client";

import React, { useState, TouchEvent } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { galleryEvents } from "@/app/data/gallery-data";

/* ---------------- GROUP BY YEAR → EVENT ---------------- */

const groupByYearAndEvent = (events: typeof galleryEvents) => {
  const grouped: Record<string, Record<string, typeof galleryEvents>> = {};

  const parseDate = (str: string) => {
    const [dd, mm, yyyy] = str.split("/");
    return new Date(+yyyy, +mm - 1, +dd);
  };

  events.forEach(event => {
    const year = parseDate(event.date).getFullYear().toString();
    if (!grouped[year]) grouped[year] = {};
    if (!grouped[year][event.eventName]) grouped[year][event.eventName] = [];
    grouped[year][event.eventName].push(event);
  });

  const sortedYears = Object.keys(grouped).sort((a, b) => +b - +a);

  sortedYears.forEach(year => {
    Object.keys(grouped[year]).forEach(eventName => {
      grouped[year][eventName].sort(
        (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
      );
    });
  });

  return { grouped, sortedYears };
};

/* ---------------- COMPONENT ---------------- */

export default function GalleryRedesign() {
  const { grouped, sortedYears } = groupByYearAndEvent(galleryEvents);

  const [selectedIndexes, setSelectedIndexes] = useState<Record<string, number>>(
    () => {
      const obj: Record<string, number> = {};
      sortedYears.forEach(year =>
        Object.keys(grouped[year]).forEach(event =>
          (obj[`${year}-${event}`] = 0)
        )
      );
      return obj;
    }
  );

  const keyOf = (y: string, e: string) => `${y}-${e}`;

  /* ---------------- MOBILE SWIPE (UNCHANGED) ---------------- */

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (key: string, max: number) => {
    if (!touchStart || !touchEnd) return;
    const diff = touchStart - touchEnd;
    if (diff > 50)
      setSelectedIndexes(p => ({ ...p, [key]: (p[key] + 1) % max }));
    if (diff < -50)
      setSelectedIndexes(p => ({ ...p, [key]: (p[key] - 1 + max) % max }));
  };

  return (
    <div className="min-h-screen bg-[#ece8df] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-7xl font-bold text-[#642a38] font-serif">
            GALLERY
          </h1>
          <p className="italic text-[#642a38] mt-2">
            A glimpse into our events & memories.
          </p>
        </div>

        {/* YEAR CARDS */}
        {sortedYears.map(year => (
          <div
            key={year}
            className="
              mb-32 bg-[#642a38]
              rounded-3xl p-10 md:p-16
              shadow-xl
            "
          >
            <h2 className="text-3xl md:text-5xl text-[#ece8df] text-center mb-20 font-serif">
              {year}
            </h2>

            {Object.keys(grouped[year]).map(eventName => {
              const events = grouped[year][eventName];
              const indexKey = keyOf(year, eventName);
              const currentIndex = selectedIndexes[indexKey];

              const prev =
                events[(currentIndex - 1 + events.length) % events.length];
              const curr = events[currentIndex];
              const next =
                events[(currentIndex + 1) % events.length];

              return (
                <div key={eventName} className="mb-28">

                  <h3 className="text-xl md:text-2xl font-semibold text-[#ece8df] text-center mb-12 font-serif">
                    {eventName}
                  </h3>

                  {/* ---------------- MOBILE (UNCHANGED) ---------------- */}
                  <div
                    className="md:hidden"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={() => onTouchEnd(indexKey, events.length)}
                  >
                    <div className="max-w-sm mx-auto bg-[#ece8df] border-2 border-[#642a38] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={curr.imageUrl}
                        className="h-64 w-full object-cover"
                        alt=""
                      />
                      <div className="p-4 text-[#642a38]">
                        <h4 className="font-bold">{curr.title}</h4>
                        <p className="text-sm opacity-70">{curr.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* ---------------- DESKTOP (BIGGER IMAGES + INSIDE ARROWS) ---------------- */}
                  <div className="hidden md:flex items-center justify-center relative h-[460px]">

                    {/* LEFT */}
                    <div className="scale-90 opacity-60 -rotate-6 bg-[#ab958a] rounded-3xl shadow-xl w-[300px] h-[360px] mr-[-130px]">
                      <img
                        src={prev.imageUrl}
                        className="w-full h-[260px] object-cover rounded-t-3xl"
                      />
                    </div>

                    {/* CENTER */}
                    <div className="bg-[#ece8df] rounded-3xl shadow-2xl w-[380px] h-[460px] z-20 border-4 border-[#ab958a]">
                      <img
                        src={curr.imageUrl}
                        className="w-full h-[340px] object-cover rounded-t-3xl"
                      />
                      <div className="p-5 text-[#642a38] text-center">
                        <h4 className="font-bold text-xl">{curr.title}</h4>
                        <p className="text-sm opacity-70">{curr.date}</p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="scale-90 opacity-60 rotate-6 bg-[#ab958a] rounded-3xl shadow-xl w-[300px] h-[360px] ml-[-130px]">
                      <img
                        src={next.imageUrl}
                        className="w-full h-[260px] object-cover rounded-t-3xl"
                      />
                    </div>

                    {/* ARROWS INSIDE CARD */}
                    <button
                      onClick={() =>
                        setSelectedIndexes(p => ({
                          ...p,
                          [indexKey]:
                            (p[indexKey] - 1 + events.length) % events.length
                        }))
                      }
                      className="
                        absolute left-6 top-1/2 -translate-y-1/2
                        bg-[#ab958a] text-[#ece8df]
                        p-3 rounded-full
                        shadow-lg hover:bg-[#ece8df]
                        hover:text-[#642a38]
                        transition z-30
                      "
                    >
                      <MoveLeft size={30} />
                    </button>

                    <button
                      onClick={() =>
                        setSelectedIndexes(p => ({
                          ...p,
                          [indexKey]:
                            (p[indexKey] + 1) % events.length
                        }))
                      }
                      className="
                        absolute right-6 top-1/2 -translate-y-1/2
                        bg-[#ab958a] text-[#ece8df]
                        p-3 rounded-full
                        shadow-lg hover:bg-[#ece8df]
                        hover:text-[#642a38]
                        transition z-30
                      "
                    >
                      <MoveRight size={30} />
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
