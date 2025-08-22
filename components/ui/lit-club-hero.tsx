"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { BookOpen, PenTool, Users, Award } from "lucide-react";

export function LitClubHero() {
  return (
    <div id="home" className="w-full">
      {/* Welcome Text Section - Minimal bottom spacing */}
      <div className="text-center py-8 px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#99aba6] mb-1 leading-tight font-serif">
          LITABLEAU
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-[#A8B5A0] mt-4 max-w-4xl mx-auto mb-6 font-medium leading-relaxed font-serif">
         Literary Club of Anna University</p>
        
      </div>

      {/* Scroll Container - Minimal top spacing for seamless flow */}
      <div className="-mt-8">
        <ContainerScroll
          titleComponent={null}
        >
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&h=720&fit=crop&crop=center"
              alt="Literature and books"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full w-full"
              draggable={false}
              priority
            />
            
            {/* Bottom text overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/60 via-[#8B7355]/30 to-[#8B7355]/20 rounded-2xl" />
            <div className="absolute bottom-4 left-4 right-4 text-[#F5F5DC] text-center z-20">
              <p className="text-lg font-medium font-serif">Discover the power of words</p>
              <p className="text-sm opacity-90 font-serif">Join our community of writers, poets, and literature enthusiasts</p>
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* Section Divider */}
      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#A8B5A0] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="w-2 h-2 bg-[#A8B5A0] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#A8B5A0] to-transparent flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
