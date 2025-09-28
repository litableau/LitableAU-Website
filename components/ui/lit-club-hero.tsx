"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { BookOpen, PenTool, Users, Award } from "lucide-react";

export function LitClubHero() {
  return (
    <div id="home" className="w-full relative">
      {/* Custom CSS for moving dots */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(100px); opacity: 0; }
        }
        
        @keyframes bubble {
          0% { transform: scale(1) translateY(0px) translateX(0px); opacity: 0; }
          15% { opacity: 1; transform: scale(1.2) translateY(-20px) translateX(20px); }
          85% { opacity: 1; transform: scale(0.8) translateY(-80px) translateX(80px); }
          100% { transform: scale(0.5) translateY(-120px) translateX(120px); opacity: 0; }
        }
        
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(1) translateY(0px) translateX(0px); }
          20% { opacity: 1; transform: scale(1.3) translateY(-30px) translateX(30px); }
          80% { opacity: 1; transform: scale(1) translateY(-70px) translateX(70px); }
          100% { opacity: 0; transform: scale(0.7) translateY(-100px) translateX(100px); }
        }
        
        @keyframes glitter {
          0% { opacity: 0; transform: scale(0.5) rotate(0deg) translateY(0px) translateX(0px); }
          25% { opacity: 1; transform: scale(1.5) rotate(90deg) translateY(-25px) translateX(25px); }
          75% { opacity: 1; transform: scale(1) rotate(270deg) translateY(-75px) translateX(75px); }
          100% { opacity: 0; transform: scale(0.3) rotate(360deg) translateY(-100px) translateX(100px); }
        }
        
        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0) rotate(0deg) translateY(0px) translateX(0px); }
          30% { opacity: 1; transform: scale(1.2) rotate(108deg) translateY(-30px) translateX(30px); }
          70% { opacity: 1; transform: scale(0.9) rotate(252deg) translateY(-70px) translateX(70px); }
          100% { opacity: 0; transform: scale(0.2) rotate(360deg) translateY(-100px) translateX(100px); }
        }
        
        .dot-float { animation: float 3s linear infinite; }
        .dot-bubble { animation: bubble 4s linear infinite; }
        .dot-twinkle { animation: twinkle 3.5s linear infinite; }
        .dot-glitter { animation: glitter 4.5s linear infinite; }
        .dot-sparkle { animation: sparkle 5s linear infinite; }
      `}</style>
      
      {/* Animated Brown Dots - Evenly Scattered Stars & Glitter Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Area - Evenly Spaced */}
        <div className="absolute top-8 left-8 w-1 h-1 bg-[#2f4f4f] rounded-full dot-glitter" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-12 left-24 w-1.5 h-1.5 bg-[#D4A574] rounded-full dot-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-16 left-40 w-1 h-1 bg-[#A8B5A0] rounded-full dot-sparkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 left-56 w-2 h-2 bg-[#2f4f4f] rounded-full dot-bubble" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-24 left-72 w-1 h-1 bg-[#D4A574] rounded-full dot-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-28 left-88 w-1.5 h-1.5 bg-[#A8B5A0] rounded-full dot-glitter" style={{ animationDelay: '2.5s' }}></div>
        
        <div className="absolute top-10 right-12 w-1.5 h-1.5 bg-[#A8B5A0] rounded-full dot-bubble" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-14 right-28 w-1 h-1 bg-[#2f4f4f] rounded-full dot-twinkle" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-18 right-44 w-2 h-2 bg-[#D4A574] rounded-full dot-glitter" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-22 right-60 w-1 h-1 bg-[#A8B5A0] rounded-full dot-float" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-26 right-76 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-sparkle" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-30 right-92 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '2.7s' }}></div>
        
        {/* Upper Middle Area - Left Side */}
        <div className="absolute top-45 left-16 w-1 h-1 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-55 left-32 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-float" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-65 left-48 w-1 h-1 bg-[#A8B5A0] rounded-full dot-bubble" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-75 left-64 w-2 h-2 bg-[#D4A574] rounded-full dot-twinkle" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-85 left-80 w-1 h-1 bg-[#2f4f4f] rounded-full dot-glitter" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute top-95 left-96 w-1.5 h-1.5 bg-[#A8B5A0] rounded-full dot-float" style={{ animationDelay: '2.8s' }}></div>
        
        {/* Upper Middle Area - Right Side */}
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-float" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute top-50 right-36 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-60 right-52 w-2 h-2 bg-[#A8B5A0] rounded-full dot-twinkle" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-70 right-68 w-1 h-1 bg-[#2f4f4f] rounded-full dot-glitter" style={{ animationDelay: '1.9s' }}></div>
        <div className="absolute top-80 right-84 w-1.5 h-1.5 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute top-90 right-100 w-1 h-1 bg-[#A8B5A0] rounded-full dot-float" style={{ animationDelay: '2.9s' }}></div>
        
        {/* Center Area - Evenly Distributed */}
        <div className="absolute top-35 left-1/4 w-1 h-1 bg-[#A8B5A0] rounded-full dot-glitter" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute top-45 left-1/3 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-float" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-55 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute top-65 left-2/3 w-2 h-2 bg-[#A8B5A0] rounded-full dot-bubble" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-75 left-3/4 w-1 h-1 bg-[#2f4f4f] rounded-full dot-twinkle" style={{ animationDelay: '2.1s' }}></div>
        
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-50 right-1/3 w-1 h-1 bg-[#2f4f4f] rounded-full dot-twinkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-60 right-1/2 transform translate-x-1/2 w-2 h-2 bg-[#A8B5A0] rounded-full dot-glitter" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-70 right-2/3 w-1 h-1 bg-[#D4A574] rounded-full dot-float" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-80 right-3/4 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-sparkle" style={{ animationDelay: '2.3s' }}></div>
        
        {/* Lower Middle Area - Left Side */}
        <div className="absolute top-105 left-24 w-1 h-1 bg-[#A8B5A0] rounded-full dot-sparkle" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-115 left-40 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-125 left-56 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-135 left-72 w-2 h-2 bg-[#A8B5A0] rounded-full dot-twinkle" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-145 left-88 w-1 h-1 bg-[#2f4f4f] rounded-full dot-glitter" style={{ animationDelay: '2.2s' }}></div>
        
        {/* Lower Middle Area - Right Side */}
        <div className="absolute top-110 right-28 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-float" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute top-120 right-44 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-130 right-60 w-2 h-2 bg-[#A8B5A0] rounded-full dot-twinkle" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-140 right-76 w-1 h-1 bg-[#2f4f4f] rounded-full dot-glitter" style={{ animationDelay: '1.9s' }}></div>
        <div className="absolute top-150 right-92 w-1.5 h-1.5 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '2.4s' }}></div>
        
        {/* Bottom Area - Evenly Spaced */}
        <div className="absolute bottom-20 left-12 w-1 h-1 bg-[#A8B5A0] rounded-full dot-sparkle" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute bottom-25 left-28 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-float" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-30 left-44 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-35 left-60 w-2 h-2 bg-[#A8B5A0] rounded-full dot-twinkle" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute bottom-40 left-76 w-1 h-1 bg-[#2f4f4f] rounded-full dot-glitter" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute bottom-45 left-92 w-1.5 h-1.5 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '2.6s' }}></div>
        
        <div className="absolute bottom-18 right-16 w-1.5 h-1.5 bg-[#2f4f4f] rounded-full dot-float" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-23 right-32 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-28 right-48 w-2 h-2 bg-[#A8B5A0] rounded-full dot-twinkle" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-33 right-64 w-1 h-1 bg-[#2f4f4f] rounded-full dot-glitter" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-38 right-80 w-1.5 h-1.5 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute bottom-43 right-96 w-1 h-1 bg-[#A8B5A0] rounded-full dot-float" style={{ animationDelay: '2.8s' }}></div>
        
        {/* Scattered Dots - Strategic Placement */}
        <div className="absolute top-1/6 left-1/8 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 left-3/8 w-1.5 h-1.5 bg-[#8B7355] rounded-full dot-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-5/8 w-1 h-1 bg-[#A8B5A0] rounded-full dot-glitter" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-7/8 w-2 h-2 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-2/6 right-1/8 w-1.5 h-1.5 bg-[#A8B5A0] rounded-full dot-sparkle" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-2/4 right-3/8 w-1 h-1 bg-[#D4A574] rounded-full dot-bubble" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-2/3 right-5/8 w-2 h-2 bg-[#8B7355] rounded-full dot-twinkle" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-2/2 right-7/8 w-1.5 h-1.5 bg-[#A8B5A0] rounded-full dot-glitter" style={{ animationDelay: '2.2s' }}></div>
        
        <div className="absolute top-3/6 left-1/6 w-1 h-1 bg-[#8B7355] rounded-full dot-float" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-[#D4A574] rounded-full dot-sparkle" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-4/6 right-1/6 w-2 h-2 bg-[#A8B5A0] rounded-full dot-bubble" style={{ animationDelay: '1.9s' }}></div>
        <div className="absolute top-4/4 right-2/3 w-1 h-1 bg-[#8B7355] rounded-full dot-twinkle" style={{ animationDelay: '2.4s' }}></div>
      </div>
      
      {/* Welcome Text Section - Minimal bottom spacing */}
      <div className="text-center py-8 px-4 relative z-10">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#99aba6] mb-1 leading-tight font-serif">
          LIT CLUB
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-[#A8B5A0] mt-4 max-w-4xl mx-auto mb-6 font-medium leading-relaxed font-serif">
         Literary Club of Anna University</p>
        
      </div>

      {/* Scroll Container - Minimal top spacing for seamless flow */}
      <div className="-mt-8 relative z-10">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F5F5DC] text-center z-20">
              <p className="text-3xl md:text-4xl font-bold font-serif leading-tight">
                Discover the power of words
              </p>
              <p className="mt-4 text-lg md:text-2xl opacity-90 font-serif max-w-2xl">
                Join our community of writers, poets, and literature enthusiasts
              </p>
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* Section Divider */}
      <div className="py-8 relative z-10">
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
