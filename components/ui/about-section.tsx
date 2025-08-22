"use client";
import React from "react";
import { BookOpen, Users, Award, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F5F5DC] dark:bg-[#8B7355]">
      {/* Section Divider */}
      <div className="pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="w-2 h-2 bg-[#A8B5A0] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-6 font-elegant">
            About Our Literary Society
          </h2>
          <p className="text-xl text-[#A8B5A0] dark:text-[#F5F5DC] max-w-3xl mx-auto font-classic leading-relaxed">
            We are a community of passionate readers, writers, and literature enthusiasts dedicated to fostering creativity and intellectual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-elegant">
              Literary Excellence
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">
              Promoting the highest standards of literary achievement and creative expression.
            </p>
          </div>

          <div className="text-center p-6 bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#8B7355]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-elegant">
              Community
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">
              Building a supportive network of writers, readers, and literature lovers.
            </p>
          </div>

          <div className="text-center p-6 bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-elegant">
              Recognition
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">
              Celebrating outstanding contributions to literature and creative writing.
            </p>
          </div>

          <div className="text-center p-6 bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-2 font-elegant">
              Passion
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] font-classic">
              Fueling the love for literature through engaging events and activities.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-[#8B7355] dark:text-[#F5F5DC] max-w-4xl mx-auto font-classic leading-relaxed">
            Our society brings together students from all disciplines who share a common love for the written word. 
            Through workshops, readings, competitions, and collaborative projects, we create an environment where 
            creativity flourishes and literary talents are nurtured.
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="w-2 h-2 bg-[#A8B5A0] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D4A574] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#F5F5DC] to-transparent flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
