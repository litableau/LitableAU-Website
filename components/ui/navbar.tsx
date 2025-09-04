"use client";
import React, { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5DC]/90 backdrop-blur-md border-b border-[#8B7355] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-[#8B7355]" />
            <span className="text-2xl font-bold text-[#8B7355] font-elegant">LIT CLUB</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic text-lg">
              Home
            </a>
            <a href="#about" className="text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic text-lg">
              About
            </a>
            <a href="#activities" className="text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic text-lg">
              Activities
            </a>
            <a href="#gallery" className="text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic text-lg">
              Gallery
            </a>
            <a href="#contact" className="text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic text-lg">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#F5F5DC]/95 rounded-lg mt-2 border border-[#8B7355]/20">
              <a
                href="#home"
                className="block px-3 py-2 text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#activities"
                className="block px-3 py-2 text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                Activities
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-[#8B7355] hover:text-[#D4A574] transition-colors duration-200 font-classic"
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
