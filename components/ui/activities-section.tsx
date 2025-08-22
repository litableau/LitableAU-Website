"use client";
import React from "react";
import { BookOpen, PenTool, Users, Award, Calendar, Star } from "lucide-react";

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-[#F5F5DC] dark:bg-[#8B7355]">
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
            Our Activities & Events
          </h2>
          <p className="text-xl text-[#A8B5A0] dark:text-[#F5F5DC] max-w-3xl mx-auto font-classic leading-relaxed">
            Discover the vibrant literary activities that bring our community together throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-3 font-elegant">
              Poetry Readings
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] mb-4 font-classic">
              Monthly poetry sessions where members share their original works and favorite poems.
            </p>
            <div className="flex items-center text-[#D4A574] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Every First Friday
            </div>
          </div>

          <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mb-4">
              <PenTool className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-3 font-elegant">
              Writing Workshops
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] mb-4 font-classic">
              Interactive sessions focused on creative writing techniques and storytelling.
            </p>
            <div className="flex items-center text-[#D4A574] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Bi-weekly Sessions
            </div>
          </div>

          <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-3 font-elegant">
              Literary Discussions
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] mb-4 font-classic">
              Book club meetings and discussions on classic and contemporary literature.
            </p>
            <div className="flex items-center text-[#D4A574] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Monthly Book Club
            </div>
          </div>

          <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-3 font-elegant">
              Writing Competitions
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] mb-4 font-classic">
              Annual contests for poetry, short stories, and creative essays with prizes.
            </p>
            <div className="flex items-center text-[#D4A574] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Annual Event
            </div>
          </div>

          <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-3 font-elegant">
              Author Meet & Greet
            </h3>
            <p className="text-[#A8B5A0] dark:text-[#F5F5DC] mb-4 font-classic">
              Special sessions with published authors and literary professionals.
            </p>
            <div className="flex items-center text-[#D4A574] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Quarterly Events
            </div>
          </div>

          <div className="bg-white/50 dark:bg-[#8B7355]/20 rounded-2xl p-6 border border-[#D4A574] dark:border-[#A8B5A0] shadow-lg">
            <div className="w-16 h-16 bg-[#D4A574] dark:bg-[#A8B5A0] rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-[#8B7355] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#F5F5DC] mb-3 font-elegant">
              Literary Magazine
            </h3>
            <p className="text-[#A8B7355] dark:text-[#F5F5DC] mb-4 font-classic">
              Publishing student works in our annual literary magazine.
            </p>
            <div className="flex items-center text-[#D4A574] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Annual Publication
            </div>
          </div>
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
