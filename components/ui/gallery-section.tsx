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

  // Sort years descending
  const sortedYears = Object.keys(grouped).sort((a, b) => +b - +a);

  // Sort events by date inside each event group
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
      sortedYears.forEach(year => {
        Object.keys(grouped[year]).forEach(event =>
          (obj[`${year}-${event}`] = 0)
        );
      });
      return obj;
    }
  );

  const itemsPerView = 3;
  const middleIndex = 1;
  const keyOf = (year: string, event: string) => `${year}-${event}`;

  /* ---------------- SWIPE HANDLERS ---------------- */

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

  /* ---------------- RENDER ---------------- */

  return (
    <div className="min-h-screen bg-[#ece8df]">
      <div className="py-10 md:py-20 max-w-7xl mx-auto px-4">

        {/* PAGE HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-bold text-[#642a38] font-serif tracking-wide">
            GALLERY
          </h1>
          <p className="italic text-[#642a38] mt-2">
            A glimpse into our events & memories.
          </p>
        </div>

        {/* YEAR LOOP */}
        {sortedYears.map(year => (
          <div key={year} className="mb-28">

            {/* YEAR HEADING */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#642a38] text-center mb-14 font-serif">
              {year}
            </h2>

            {/* EVENT LOOP */}
            {Object.keys(grouped[year]).map(eventName => {
              const events = grouped[year][eventName];
              const indexKey = keyOf(year, eventName);
              const currentIndex = selectedIndexes[indexKey];

              return (
                <div key={eventName} className="mb-20">

                  {/* EVENT TITLE */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#642a38] text-center mb-8 font-serif">
                    {eventName}
                  </h3>

                  {/* -------- MOBILE VIEW -------- */}
                  <div
                    className="md:hidden"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={() => onTouchEnd(indexKey, events.length)}
                  >
                    <div className="relative max-w-sm mx-auto bg-[#ece8df] border-2 border-[#642a38] rounded-lg overflow-hidden shadow-xl">

                      <button
                        onClick={() =>
                          setSelectedIndexes(p => ({
                            ...p,
                            [indexKey]:
                              (p[indexKey] - 1 + events.length) %
                              events.length
                          }))
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#642a38]/90 text-[#ece8df] p-2 rounded-full z-10"
                      >
                        <MoveLeft />
                      </button>

                      <button
                        onClick={() =>
                          setSelectedIndexes(p => ({
                            ...p,
                            [indexKey]: (p[indexKey] + 1) % events.length
                          }))
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#642a38]/90 text-[#ece8df] p-2 rounded-full z-10"
                      >
                        <MoveRight />
                      </button>

                      <img
                        src={events[currentIndex].imageUrl}
                        className="h-64 w-full object-cover"
                        alt=""
                      />

                      <div className="p-4 text-[#642a38]">
                        <h4 className="font-bold">
                          {events[currentIndex].title}
                        </h4>
                        <p className="text-sm opacity-70">
                          {events[currentIndex].date}
                        </p>
                      </div>
                    </div>

                    {/* DOTS */}
                    <div className="flex justify-center gap-2 mt-4">
                      {events.map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setSelectedIndexes(p => ({
                              ...p,
                              [indexKey]: i
                            }))
                          }
                          className={`w-3 h-3 rounded-full ${
                            currentIndex === i
                              ? "bg-[#642a38] scale-125"
                              : "bg-[#ab958a]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* -------- DESKTOP VIEW -------- */}
                  <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {Array.from({ length: itemsPerView }).map((_, idx) => {
                      const i =
                        (currentIndex - middleIndex + idx + events.length) %
                        events.length;
                      const ev = events[i];

                      return (
                        <div
                          key={ev.id}
                          onClick={() =>
                            setSelectedIndexes(p => ({
                              ...p,
                              [indexKey]: i
                            }))
                          }
                          className="bg-[#ece8df] border border-[#642a38] rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
                        >
                          <img
                            src={ev.imageUrl}
                            className="h-64 w-full object-cover"
                            alt=""
                          />
                          <div className="p-4 text-[#642a38]">
                            <h4 className="font-bold">{ev.title}</h4>
                            <p className="text-xs opacity-70">{ev.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* DESKTOP ARROWS */}
                  <div className="hidden md:flex justify-center gap-6 mt-6 text-[#642a38]">
                    <button
                      onClick={() =>
                        setSelectedIndexes(p => ({
                          ...p,
                          [indexKey]:
                            (p[indexKey] - 1 + events.length) %
                            events.length
                        }))
                      }
                    >
                      <MoveLeft size={36} />
                    </button>
                    <button
                      onClick={() =>
                        setSelectedIndexes(p => ({
                          ...p,
                          [indexKey]: (p[indexKey] + 1) % events.length
                        }))
                      }
                    >
                      <MoveRight size={36} />
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
