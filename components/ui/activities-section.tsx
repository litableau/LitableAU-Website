"use client";
import React from "react";
import { BookOpen, PenTool, Users, Award, Calendar, Star } from "lucide-react";

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-[#F5F5DC] dark:bg-[#2F4F4F] relative overflow-hidden">
      {/* Elegant Brown Background Effects */}
      <div className="absolute inset-0">
        {/* Main beige background with subtle brown overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#F5F5DC]/95 via-[#E8E4D8]/90 to-[#DBD7CC]/85"></div>
        
        {/* Subtle checked lines pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 4px, #8B7355 4px, #8B7355 5px), repeating-linear-gradient(90deg, transparent, transparent 4px, #8B7355 4px, #8B7355 5px)`,
          backgroundSize: '8px 8px'
        }}></div>
        
        {/* Soft brown circular elements */}
        <div className="absolute top-16 right-16 w-36 h-36 bg-gradient-to-bl from-[#8B7355]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-44 h-44 bg-gradient-to-tr from-[#8B7355]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-[#8B7355]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-tl from-[#8B7355]/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-[#8B7355]/12 to-[#A08B6A]/12 rounded-full blur-xl"></div>
        

        
        {/* Subtle corner accents */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-[#8B7355]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-[#8B7355]/10 to-transparent"></div>
        

      </div>
      
      {/* Section Divider */}
      <div className="pb-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#8B7355] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#8B7355] rounded-full"></div>
            <div className="w-2 h-2 bg-[#8B7355] rounded-full"></div>
            <div className="w-3 h-3 bg-[#8B7355] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#8B7355] to-transparent flex-1"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B7355] dark:text-[#8B7355] mb-6 font-elegant">
            Our Activities & Events
          </h2>
          <p className="text-xl text-[#8B7355] dark:text-[#8B7355] max-w-3xl mx-auto font-classic leading-relaxed">
            Discover the vibrant literary activities that bring our community together throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/40 dark:bg-[#2F4F4F]/30 rounded-2xl p-6 border border-[#8B7355] dark:border-[#8B7355] shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#8B7355] dark:bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-[#F5F5DC] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#8B7355] mb-3 font-elegant">
              Poetry Readings
            </h3>
            <p className="text-[#8B7355] dark:text-[#8B7355] mb-4 font-classic">
              Monthly poetry sessions where members share their original works and favorite poems.
            </p>
            <div className="flex items-center text-[#8B7355] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Every First Friday
            </div>
          </div>

          <div className="bg-white/40 dark:bg-[#2F4F4F]/30 rounded-2xl p-6 border border-[#8B7355] dark:border-[#8B7355] shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#8B7355] dark:bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <PenTool className="h-8 w-8 text-[#F5F5DC] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#8B7355] mb-3 font-elegant">
              Writing Workshops
            </h3>
            <p className="text-[#8B7355] dark:text-[#8B7355] mb-4 font-classic">
              Interactive sessions focused on creative writing techniques and storytelling.
            </p>
            <div className="flex items-center text-[#8B7355] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Bi-weekly Sessions
            </div>
          </div>

          <div className="bg-white/40 dark:bg-[#2F4F4F]/30 rounded-2xl p-6 border border-[#8B7355] dark:border-[#8B7355] shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#8B7355] dark:bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-[#F5F5DC] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#8B7355] mb-3 font-elegant">
              Literary Discussions
            </h3>
            <p className="text-[#8B7355] dark:text-[#8B7355] mb-4 font-classic">
              Book club meetings and discussions on classic and contemporary literature.
            </p>
            <div className="flex items-center text-[#8B7355] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Monthly Book Club
            </div>
          </div>

          <div className="bg-white/40 dark:bg-[#2F4F4F]/30 rounded-2xl p-6 border border-[#8B7355] dark:border-[#8B7355] shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#8B7355] dark:bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-[#F5F5DC] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#8B7355] mb-3 font-elegant">
              Writing Competitions
            </h3>
            <p className="text-[#8B7355] dark:text-[#8B7355] mb-4 font-classic">
              Annual contests for poetry, short stories, and creative essays with prizes.
            </p>
            <div className="flex items-center text-[#8B7355] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Annual Event
            </div>
          </div>

          <div className="bg-white/40 dark:bg-[#2F4F4F]/30 rounded-2xl p-6 border border-[#8B7355] dark:border-[#8B7355] shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#8B7355] dark:bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-[#F5F5DC] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#8B7355] mb-3 font-elegant">
              Author Meet & Greet
            </h3>
            <p className="text-[#8B7355] dark:text-[#8B7355] mb-4 font-classic">
              Special sessions with published authors and literary professionals.
            </p>
            <div className="flex items-center text-[#8B7355] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Quarterly Events
            </div>
          </div>

          <div className="bg-white/40 dark:bg-[#2F4F4F]/30 rounded-2xl p-6 border border-[#8B7355] dark:border-[#8B7355] shadow-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#8B7355] dark:bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-[#F5F5DC] dark:text-[#F5F5DC]" />
            </div>
            <h3 className="text-xl font-bold text-[#8B7355] dark:text-[#8B7355] mb-3 font-elegant">
              Literary Magazine
            </h3>
            <p className="text-[#8B7355] dark:text-[#8B7355] mb-4 font-classic">
              Publishing student works in our annual literary magazine.
            </p>
            <div className="flex items-center text-[#8B7355] text-sm font-classic">
              <Calendar className="h-4 w-4 mr-2" />
              Annual Publication
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="pt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#8B7355] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#8B7355] rounded-full"></div>
            <div className="w-2 h-2 bg-[#8B7355] rounded-full"></div>
            <div className="w-3 h-3 bg-[#8B7355] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] dark:via-[#8B7355] to-transparent flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
