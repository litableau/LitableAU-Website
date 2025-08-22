"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="w-full">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Experience smooth 3D transformations and beautiful scroll-based animations
            </p>
          </>
        }
      >
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1400&h=720&fit=crop&crop=center"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full w-full"
            draggable={false}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        </div>
      </ContainerScroll>
    </div>
  );
}
