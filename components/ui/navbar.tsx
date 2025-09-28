"use client";
import React, { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2f4f4f] backdrop-blur-md border-b border-[#2f4f4f] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-[#f5f5dc]" />
            <span className="text-2xl font-bold text-[#f5f5dc] font-elegant">LIT CLUB</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic text-lg">
              Home
            </a>
            <a href="#about" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic text-lg">
              About
            </a>
            <a href="/events" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic text-lg">
              Events
            </a>
            <a href="/gallery" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic text-lg">
              Gallery
            </a>
            <a href="/contact" className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic text-lg">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2f4f4f] rounded-lg mt-2 border border-[#f5f5dc]/20">
              <a
                href="/"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/events"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                Events
              </a>
              <a
                href="/gallery"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-[#f5f5dc] hover:text-[#f5f5dc]/80 transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
