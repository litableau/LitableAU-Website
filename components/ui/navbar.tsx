"use client";
import React, { useState } from "react";
import { Menu, X, Pen } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2f4f4f] backdrop-blur-md border-b border-[#2f4f4f] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout: left (1fr) | center (auto) | right (1fr) */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">

          {/* Left links */}
          <div className="flex items-center justify-start space-x-20">
            <a
              href="/#about"
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
              <Pen className="h-8 w-8 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200" />
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
              href="/contact"
              className="text-[#f5f5dc] uppercase font-classic text-lg hover:text-[#f5f5dc]/80 transition-colors duration-200"
            >
              MEET US
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2f4f4f] rounded-lg border border-[#f5f5dc]/20">
              <a
                href="/#about"
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
                href="/contact"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic uppercase"
                onClick={() => setIsOpen(false)}
              >
                MEET US
              </a>
            </div>
          </div>
        )}

        {/* Mobile menu button */}
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
