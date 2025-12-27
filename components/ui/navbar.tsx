"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#642a38] backdrop-blur-md border-b border-[#62554d]/40 shadow-lg">
      {/* ⬇ reduced padding on mobile */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">

        {/* -------------------- DESKTOP NAVBAR -------------------- */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-16">

          {/* Left links */}
          <div className="flex items-center justify-start space-x-20">
            <a href="/aboutus" className="nav-link">ABOUT US</a>
            <a href="/gallery" className="nav-link">GALLERY</a>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <a href="/" aria-label="Home">
              <div className="h-14 w-14 bg-[#ece8df] rounded-full overflow-hidden shadow-md hover:scale-105 transition">
                <img src="/images/Liticon.png" alt="Lit Icon" className="h-full w-full object-cover" />
              </div>
            </a>
          </div>

          {/* Right links */}
          <div className="flex items-center justify-end space-x-20">
            <a href="/events" className="nav-link">EVENTS</a>
            <a href="/meetus" className="nav-link">MEET US</a>
          </div>
        </div>

        {/* -------------------- MOBILE DROPDOWN -------------------- */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-3 py-3 space-y-1 bg-[#642a38] rounded-lg border border-[#e1d5c9]/30">
              {["aboutus", "gallery", "events", "meetus"].map(link => (
                <a
                  key={link}
                  href={`/${link}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-[#ece8df] uppercase font-classic hover:text-[#ab958a]"
                >
                  {link.replace(/^\w/, c => c.toUpperCase())}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* -------------------- MOBILE LOGO -------------------- */}
        <div className="md:hidden flex flex-col items-center justify-center mt-2">
          <a href="/" className="flex flex-col items-center">
            <div className="h-12 w-12 bg-[#ece8df] rounded-full overflow-hidden shadow-md">
              <img src="/images/Liticon.png" alt="Lit Icon" className="h-full w-full object-cover" />
            </div>
            <span className="text-[10px] text-[#ece8df] mt-1 uppercase opacity-80">
              Home
            </span>
          </a>
        </div>

        {/* -------------------- MOBILE MENU BUTTON -------------------- */}
        <div className="md:hidden absolute top-3 right-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#ece8df] hover:text-[#ab958a]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>
    </nav>
  );
}

/* optional utility */
const navLink =
  "text-[#ece8df] uppercase font-classic text-lg hover:text-[#ab958a] transition-colors";
