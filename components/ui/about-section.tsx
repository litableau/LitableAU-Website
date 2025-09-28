"use client";
import React from "react";
import { BookOpen, Users, Award, Heart } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[rgb(229,199,177)] relative overflow-hidden">
      {/* Custom CSS for moving beige dots */}
      <style jsx>{`
        @keyframes float-beige-about {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-60px) translateX(40px); opacity: 0; }
        }
        
        @keyframes drift-beige-about {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0; }
          20% { opacity: 0.6; transform: translateY(-15px) translateX(10px) scale(1.1); }
          80% { opacity: 0.6; transform: translateY(-45px) translateX(30px) scale(0.9); }
          100% { transform: translateY(-80px) translateX(50px) scale(0.8); opacity: 0; }
        }
        
        @keyframes gentle-beige-about {
          0% { opacity: 0; transform: scale(0.8) translateY(0px) translateX(0px); }
          25% { opacity: 0.5; transform: scale(1.2) translateY(-20px) translateX(15px); }
          75% { opacity: 0.5; transform: scale(1) translateY(-60px) translateX(40px); }
          100% { opacity: 0; transform: scale(0.6) translateY(-100px) translateX(70px); }
        }
        
        .dot-float-beige-about { animation: float-beige-about 8s linear infinite; }
        .dot-drift-beige-about { animation: drift-beige-about 10s linear infinite; }
        .dot-gentle-beige-about { animation: gentle-beige-about 12s linear infinite; }
      `}</style>
      
      {/* Elegant Beige Background Effects */}
      <div className="absolute inset-0">
        {/* Main beige background with subtle beige overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(229,199,177)]/90 via-[rgb(229,199,177)]/80 to-[rgb(229,199,177)]/70"></div>
        
        {/* Animated beige dots pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left area */}
          <div className="absolute top-8 left-8 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-about opacity-60" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-16 left-20 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-about opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-24 left-12 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-about opacity-55" style={{ animationDelay: '2s' }}></div>
          
          {/* Top right area */}
          <div className="absolute top-12 right-16 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-about opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-20 right-8 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-about opacity-50" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-about opacity-55" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Middle left area */}
          <div className="absolute top-1/3 left-16 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-about opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-about opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-24 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-about opacity-55" style={{ animationDelay: '3s' }}></div>
          
          {/* Middle right area */}
          <div className="absolute top-1/3 right-8 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-about opacity-60" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-about opacity-50" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-2/3 right-12 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-about opacity-55" style={{ animationDelay: '3.5s' }}></div>
          
          {/* Bottom left area */}
          <div className="absolute bottom-16 left-12 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-about opacity-60" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-24 left-24 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-about opacity-50" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-32 left-8 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-about opacity-55" style={{ animationDelay: '4s' }}></div>
          
          {/* Bottom right area */}
          <div className="absolute bottom-12 right-8 w-2 h-2 bg-[#F5F5DC] rounded-full dot-float-beige-about opacity-60" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-drift-beige-about opacity-50" style={{ animationDelay: '3.5s' }}></div>
          <div className="absolute bottom-28 right-16 w-1 h-1 bg-[#F5F5DC] rounded-full dot-gentle-beige-about opacity-55" style={{ animationDelay: '4.5s' }}></div>
          
          {/* Center area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#F5F5DC] rounded-full dot-gentle-beige-about opacity-45" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#F5F5DC] rounded-full dot-float-beige-about opacity-40" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Soft beige circular elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-bl from-[#F5F5DC]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-tr from-[#F5F5DC]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-[#F5F5DC]/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-tl from-[#F5F5DC]/10 to-transparent rounded-full blur-xl"></div>
        
        {/* Elegant diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform rotate-12"></div>
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform -rotate-8"></div>
          <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F5DC] to-transparent transform rotate-15"></div>
        </div>
        
        {/* Subtle corner accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#F5F5DC]/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F5F5DC]/8 to-transparent"></div>
      </div>
      
      {/* Section Divider */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F4F] mb-6 font-elegant">
            About Our Literary Society
          </h2>
          <p className="text-xl text-[#2F4F4F] max-w-3xl mx-auto font-classic leading-relaxed">
            We are a community of passionate readers, writers, and literature enthusiasts dedicated to fostering creativity and intellectual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
         

          <div className="text-center p-6 bg-white/60 rounded-2xl border border-[#2F4F4F]/20 shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#2F4F4F]/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <Image
                src="/images/community-image.jpg"
                alt="Community"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-2 font-elegant">
              Community
            </h3>
            <p className="text-[#2F4F4F] font-classic">
              Fun workshops and club events
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 rounded-2xl border border-[#2F4F4F]/20 shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#2F4F4F]/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <Image
                src="/images/recognition-image.jpg"
                alt="Recognition"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-2 font-elegant">
              Recognition
            </h3>
            <p className="text-[#2F4F4F] font-classic">
              Free weekly book recommendations
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 rounded-2xl border border-[#2F4F4F]/20 shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#2F4F4F]/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <Image
                src="/images/passion-image.jpg"
                alt="Passion"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-2 font-elegant">
              Passion
            </h3>
            <p className="text-[#2F4F4F] font-classic">
              A platform to discuss and gather reviews
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-[#2F4F4F] max-w-4xl mx-auto font-classic leading-relaxed">
            As one of the most prestigious clubs in Anna University, We promote a variety of literary and cultural activities
            such as public speaking, debating, creative writing, charades, reading and other spontaneous stage events. The primary
            goal of the Literary Club is to aid students in their creative endeavours and to empower them to express their thoughts
            with superior clarity and conviction.
            We believe in honing young individuals to become excellent communicators by providing a platform
            for them to explore, experiment and learn as a community.
          </p>
        </div>
      </div>

     
    </section>
  );
}
