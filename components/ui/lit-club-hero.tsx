"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function LitClubHero() {
  return (
    <div id="home" className="w-full relative">

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(100px); opacity: 0; }
        }
        @keyframes bubble {
          0% { transform: scale(1); opacity: 0; }
          15% { opacity: 1; transform: scale(1.2); }
          85% { opacity: 1; transform: scale(0.8); }
          100% { transform: scale(0.5); opacity: 0; }
        }
        @keyframes twinkle {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes glitter {
          0% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.3) rotate(180deg); }
          100% { opacity: 0; transform: scale(0.3) rotate(360deg); }
        }

        .dot-float { animation: float 3s linear infinite; }
        .dot-bubble { animation: bubble 4s linear infinite; }
        .dot-twinkle { animation: twinkle 3.5s linear infinite; }
        .dot-glitter { animation: glitter 4.5s linear infinite; }
      `}</style>

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-[#642a38] rounded-full dot-glitter" />
        <div className="absolute top-20 left-32 w-1.5 h-1.5 bg-[#e1d5c9] rounded-full dot-float" />
        <div className="absolute top-28 left-56 w-1 h-1 bg-[#62554d] rounded-full dot-bubble" />
        <div className="absolute top-36 left-80 w-2 h-2 bg-[#ab958a] rounded-full dot-twinkle" />

        <div className="absolute top-16 right-20 w-1.5 h-1.5 bg-[#e1d5c9] rounded-full dot-float" />
        <div className="absolute top-32 right-48 w-1 h-1 bg-[#642a38] rounded-full dot-glitter" />
        <div className="absolute top-48 right-72 w-2 h-2 bg-[#62554d] rounded-full dot-bubble" />

        <div className="absolute bottom-24 left-24 w-1 h-1 bg-[#ab958a] rounded-full dot-twinkle" />
        <div className="absolute bottom-36 right-36 w-1.5 h-1.5 bg-[#e1d5c9] rounded-full dot-float" />
        <div className="absolute bottom-48 right-64 w-1 h-1 bg-[#642a38] rounded-full dot-glitter" />
      </div>

      {/* Hero Image */}
      <div className="-mt-8 relative z-10">
        <div className="relative w-full h-[65vh] md:h-[70vh] lg:h-[75vh]">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&h=720&fit=crop&crop=center"
            alt="Literature and books"
            fill
            className="rounded-2xl object-cover"
            draggable={false}
            priority
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-full flex flex-col items-center px-4">
              <h1
                className="font-serif font-thin leading-none text-[#ece8df] text-[16vw] md:text-[14vw] lg:text-[12vw] tracking-tight text-center"
                style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
              >
                LITCLUB
              </h1>
              <p
                className="mt-3 text-[#ece8df]/90 text-xs sm:text-sm md:text-base lg:text-lg text-center leading-snug max-w-[90vw] md:max-w-3xl"
                style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
              >
                Literary Club of Anna University
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
