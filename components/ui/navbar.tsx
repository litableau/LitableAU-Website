"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#642a38] backdrop-blur-md border-b border-[#62554d]/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* -------------------- DESKTOP NAVBAR -------------------- */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-16">

          {/* Left links */}
          <div className="flex items-center justify-start space-x-20">
            <a
              href="/aboutus"
              className="text-[#ece8df] uppercase font-classic text-lg hover:text-[#ab958a] transition-colors duration-200"
            >
              ABOUT US
            </a>
            <a
              href="/gallery"
              className="text-[#ece8df] uppercase font-classic text-lg hover:text-[#ab958a] transition-colors duration-200"
            >
              GALLERY
            </a>
          </div>

          {/* -------- CENTER LOGO (FULL CIRCLE IMAGE) -------- */}
          <div className="flex justify-center">
            <a href="/" aria-label="Home">
              <div
                className="
                  h-14 w-14
                  bg-[#ece8df]
                  rounded-full
                  overflow-hidden
                  shadow-md
                  transition-transform duration-200
                  hover:scale-105
                  active:scale-95
                "
              >
                <img
                  src="/images/Liticon.png"
                  alt="Lit Icon"
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
          </div>

          {/* Right links */}
          <div className="flex items-center justify-end space-x-20">
            <a
              href="/events"
              className="text-[#ece8df] uppercase font-classic text-lg hover:text-[#ab958a] transition-colors duration-200"
            >
              EVENTS
            </a>
            <a
              href="/meetus"
              className="text-[#ece8df] uppercase font-classic text-lg hover:text-[#ab958a] transition-colors duration-200"
            >
              MEET US
            </a>
            <a
              href="https://litablaze.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ece8df] uppercase font-classic text-lg hover:text-[#ab958a] transition-colors duration-200"
            >
              LITABLAZE
            </a>
          </div>
        </div>

        {/* -------------------- MOBILE NAVIGATION DROPDOWN -------------------- */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#642a38] rounded-lg border border-[#e1d5c9]/30">
              {["aboutus", "gallery", "events", "meetus"].map((link) => (
                <a
                  key={link}
                  href={`/${link}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-[#ece8df] hover:text-[#ab958a] transition-colors duration-200 font-classic uppercase"
                >
                  {link === "aboutus" ? "About us" :
                  link === "meetus" ? "Meet us" :
                  link.replace(/^\w/, (c) => c.toUpperCase())}
                </a>
              ))}
              {/* ---- LITABLAZE (external link) ---- */}
              <a
                href="https://litablaze-litclubau.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 mt-3 text-[#ece8df] hover:text-[#ab958a] transition-colors duration-200 font-classic uppercase"
              >
                LITABLAZE
              </a>
            </div>
          </div>
        )}

        {/* -------- MOBILE LOGO + HOME TEXT (FULL CIRCLE IMAGE) -------- */}
        <div className="md:hidden flex flex-col items-center justify-center mt-3">
          <a href="/" className="flex flex-col items-center">
            <div
              className="
                h-14 w-14
                bg-[#ece8df]
                rounded-full
                overflow-hidden
                shadow-md
                transition-transform duration-200
                hover:scale-105
                active:scale-90
              "
            >
              <img
                src="/images/Liticon.png"
                alt="Lit Icon"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-[10px] text-[#ece8df] mt-1 tracking-wide uppercase opacity-80">
              Home
            </span>
          </a>
        </div>

        {/* -------------------- MOBILE MENU BUTTON -------------------- */}
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#ece8df] hover:text-[#ab958a] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>
    </nav>
  );
}
