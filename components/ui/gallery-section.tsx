"use client";

import React, { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { galleryEvents } from "@/app/data/gallery-data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";


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
    if (!grouped[year][event.eventName])
      grouped[year][event.eventName] = [];
    grouped[year][event.eventName].push(event);
  });

  const sortedYears = Object.keys(grouped).sort((a, b) => +b - +a);

  sortedYears.forEach(year => {
    Object.keys(grouped[year]).forEach(eventName => {
      grouped[year][eventName].sort(
        (a, b) =>
          parseDate(b.date).getTime() - parseDate(a.date).getTime()
      );
    });
  });

  return { grouped, sortedYears };
};

/* ---------------- AUTO ROTATING DESKTOP CAROUSEL ---------------- */

function AutoRotatingCarousel({ events }: { events: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [holding, setHolding] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = events.length;
  const radius = 380;

  useEffect(() => {
    if (holding) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex(i => (i + 1) % total);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [holding, total]);

  const rotateLeft = () =>
    setActiveIndex(i => (i - 1 + total) % total);
  const rotateRight = () =>
    setActiveIndex(i => (i + 1) % total);

  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center
        perspective-[1400px]
        z-10
        ${holding ? "cursor-grabbing" : "cursor-default"}
      `}
      onMouseDown={() => setHolding(true)}
      onMouseUp={() => setHolding(false)}
      onMouseLeave={() => setHolding(false)}
    >
      {/* CARDS */}
      {events.map((item, i) => {
        const offset = ((i - activeIndex + total) % total);
        const angle = (offset * (2 * Math.PI)) / total;

        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        const scale = (z + radius) / (2 * radius) + 0.35;
        const opacity = (z + radius) / (2 * radius);

        return (
          <div
            key={i}
            className="
              absolute
              transition-transform
              duration-[1600ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={{
              transform: `
                translateX(${x}px)
                translateZ(${z}px)
                scale(${scale})
                rotateY(${x > 0 ? -8 : 8}deg)
              `,
              opacity,
              zIndex: Math.round(scale * 100),
            }}
          >
            <div className="
              bg-[#f2eee9]
              rounded-3xl
              shadow-2xl
              w-[360px]
              h-[420px]
              border-4 border-[#ab958a]
              overflow-hidden
            ">
              <div className="relative w-full h-[260px]">
  <Image
    src={item.imageUrl}
    alt={item.title}
    fill
    sizes="360px"
    className="object-cover rounded-t-3xl"
    priority={i === activeIndex}   // only active card loads eagerly
  />
</div>

              <div className="h-[160px] p-5 text-[#642a38] text-center flex flex-col justify-center">
                <h4 className="font-bold text-lg leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm opacity-70">{item.date}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ARROWS (ALWAYS ON TOP OF CAROUSEL) */}
      <div className="absolute inset-0 pointer-events-none z-[999]">
        <button
          onClick={rotateLeft}
          className="
            pointer-events-auto
            absolute left-6 top-1/2 -translate-y-1/2
            bg-[#62554d] text-[#ece8df]
            p-3 rounded-full shadow-lg
            hover:bg-[#ece8df] hover:text-[#642a38]
            transition
          "
        >
          <MoveLeft size={26} />
        </button>

        <button
          onClick={rotateRight}
          className="
            pointer-events-auto
            absolute right-6 top-1/2 -translate-y-1/2
            bg-[#62554d] text-[#ece8df]
            p-3 rounded-full shadow-lg
            hover:bg-[#ece8df] hover:text-[#642a38]
            transition
          "
        >
          <MoveRight size={26} />
        </button>
      </div>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function GalleryRedesign() {
  const { grouped, sortedYears } = groupByYearAndEvent(galleryEvents);

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

        {sortedYears.map(year => (
          <div
            key={year}
            className="
              mb-32
              bg-[#ab958a]
              rounded-3xl
              p-10 md:p-16
              shadow-xl
            "
          >
            <h2 className="text-3xl md:text-5xl text-[#642a38] text-center mb-20 font-serif">
              {year}
            </h2>

            {Object.keys(grouped[year])
              .sort((a, b) => {
                const parseDate = (str: string) => {
                  const [dd, mm, yyyy] = str.split("/");
                  return new Date(+yyyy, +mm - 1, +dd);
                };
              
                const aEvents = grouped[year][a];
                const bEvents = grouped[year][b];
              
                const aDate = parseDate(
                  aEvents[aEvents.length - 1].date
                );
                const bDate = parseDate(
                  bEvents[bEvents.length - 1].date
                );
              
                // CHRONOLOGICAL: oldest → newest
                return bDate.getTime() - aDate.getTime();
              })
              .map(eventName => {
                const events = grouped[year][eventName];
              return (
                <div key={eventName} className="mb-28">

                  <h3 className="text-xl md:text-2xl font-semibold text-[#642a38] text-center mb-12 font-serif">
                    {eventName}
                  </h3>

                  {/* MOBILE (UNCHANGED) */}
                  <div className="md:hidden">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={24}
                      slidesPerView={1.1}
                      centeredSlides
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3500, disableOnInteraction: false }}
                      className="pb-10"
                    >
                      {events.map((item, i) => (
                        <SwiperSlide key={i}>
                          <div className="bg-[#f2eee9] rounded-3xl shadow-2xl border-4 border-[#ab958a] overflow-hidden">
                           <div className="relative w-full h-[280px]">
  <Image
    src={item.imageUrl}
    alt={item.title}
    fill
    sizes="(max-width: 768px) 90vw, 360px"
    className="object-cover"
  />
</div>

                            <div className="p-4 text-[#642a38] text-center">
                              <h4 className="font-bold">{item.title}</h4>
                              <p className="text-sm opacity-70">{item.date}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* DESKTOP */}
                  <div className="hidden md:block relative h-[500px] z-10">
                    <AutoRotatingCarousel events={events} />
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
