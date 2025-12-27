"use client";
import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#e1d5c9] relative overflow-hidden">

      {/* Particle animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.35; }
          90% { opacity: 0.35; }
          100% { transform: translateY(-60px) translateX(40px); opacity: 0; }
        }
        @keyframes drift {
          0% { opacity: 0; transform: scale(1); }
          20% { opacity: 0.3; transform: scale(1.1); }
          80% { opacity: 0.3; transform: scale(0.9); }
          100% { opacity: 0; transform: scale(0.8); }
        }
        .dot-float { animation: float 8s linear infinite; }
        .dot-drift { animation: drift 10s linear infinite; }
      `}</style>

      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Soft Echo gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e1d5c9]/95 via-[#e1d5c9]/85 to-[#e1d5c9]/75"></div>

        {/* Merlot particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            "top-10 left-10",
            "top-20 right-20",
            "top-1/3 left-1/4",
            "top-1/2 right-1/3",
            "bottom-20 left-16",
            "bottom-32 right-24",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-1.5 h-1.5 bg-[#642a38] rounded-full ${
                i % 2 === 0 ? "dot-float" : "dot-drift"
              }`}
            />
          ))}
        </div>

        {/* Merlot glow accents */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#642a38]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-[#642a38]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#642a38] mb-6 font-elegant">
            About Our Literary Society
          </h2>
          <p className="text-xl text-[#642a38] max-w-3xl mx-auto font-classic leading-relaxed">
            We are a community of passionate readers, writers, and literature enthusiasts
            dedicated to fostering creativity and intellectual growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Community", img: "/images/community-image.jpg", text: "Fun workshops and club events" },
            { title: "Recognition", img: "/images/recognition-image.jpg", text: "Free weekly book recommendations" },
            { title: "Passion", img: "/images/passion-image.jpg", text: "A platform to discuss and gather reviews" },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 bg-white/60 rounded-2xl border border-[#ab958a]/30 shadow-lg backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-[#ab958a]/15 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[#642a38] mb-2 font-elegant">
                {item.title}
              </h3>
              <p className="text-[#642a38] font-classic">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#642a38] max-w-4xl mx-auto font-classic leading-relaxed">
            As one of the most prestigious clubs in Anna University, we promote literary
            and cultural activities that empower students to express ideas with clarity,
            confidence, and creativity.
          </p>
        </div>

      </div>
    </section>
  );
}
