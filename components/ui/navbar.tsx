"use client";
import React, { useState } from "react";
import { Menu, X, Pen } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(23,58,43)] backdrop-blur-md border-b border-[rgb(23,58,43)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop Navbar */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-16">

          {/* Left links */}
          <div className="flex items-center justify-start space-x-20">
            <a
              href="/aboutus"
              className="text-[#f5f5dc] uppercase font-classic text-lg hover:text-[#f5f5dc]/80 transition-colors duration-200"
            >
              ABOUT US
            </a>
            <a
              href="/gallery"
              className="text-[#f5f5dc] uppercase font-classic text-lg hover:text-[#f5f5dc]/80 transition-colors duration-200"
            >
              GALLERY
            </a>
          </div>

          {/* Center Pen Icon */}
          <div className="flex justify-center">
               <a href="/">
                  <img
                        src="/images/Liticon.png"
                        alt="Lit Icon"
                        className="h-12 w-12 object-contain transition-transform transition-opacity duration-200 hover:scale-110 hover:opacity-80"
                  />
                </a>
          </div>
          {/* Right links */}
          <div className="flex items-center justify-end space-x-20">
            <a
              href="/events"
              className="text-[#f5f5dc] uppercase font-classic text-lg hover:text-[#f5f5dc]/80 transition-colors duration-200"
            >
              EVENTS
            </a>
            <a
              href="/meetus"
              className="text-[#f5f5dc] uppercase font-classic text-lg hover:text-[#f5f5dc]/80 transition-colors duration-200"
            >
              MEET US
            </a>
          </div>
        </div>

        {/* Mobile Navigation (only visible when open) */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="mobile-dropdown px-2 pt-2 pb-3 space-y-1 bg-[rgb(23,58,43)] rounded-lg border border-[#f5f5dc]/20">
              <a
                href="/aboutus"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic uppercase"
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </a>
              <a
                href="/gallery"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic uppercase"
                onClick={() => setIsOpen(false)}
              >
                GALLERY
              </a>
              <a
                href="/events"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic uppercase"
                onClick={() => setIsOpen(false)}
              >
                EVENTS
              </a>
              <a
                href="/meetus"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic uppercase"
                onClick={() => setIsOpen(false)}
              >
                MEET US
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}