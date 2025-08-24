"use client";
import React from "react";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F5F5DC] text-[#8B7355]">
      {/* Section Divider */}
      <div className="pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-[#8B7355] rounded-full"></div>
            <div className="w-2 h-2 bg-[#8B7355] rounded-full"></div>
            <div className="w-3 h-3 bg-[#8B7355] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B7355] to-transparent flex-1"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-[#8B7355]" />
              <span className="text-2xl font-bold font-elegant">LITABLEAU</span>
            </div>
            <p className="text-[#8B7355] mb-6 font-classic leading-relaxed">
              The Literary Society of Anna University, fostering creativity, critical thinking, and a love for literature 
              among students. Join our community of writers, poets, and literature enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#A08B6A] transition-colors">
                <Facebook className="h-5 w-5 text-[#F5F5DC]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#A08B6A] transition-colors">
                <Twitter className="h-5 w-5 text-[#F5F5DC]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#A08B6A] transition-colors">
                <Instagram className="h-5 w-5 text-[#F5F5DC]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#A08B6A] transition-colors">
                <Linkedin className="h-5 w-5 text-[#F5F5DC]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-elegant">Quick Links</h3>
            <ul className="space-y-2 font-classic">
              <li><a href="#home" className="text-[#8B7355] hover:text-[#A08B6A] transition-colors">Home</a></li>
              <li><a href="#about" className="text-[#8B7355] hover:text-[#A08B6A] transition-colors">About</a></li>
              <li><a href="#activities" className="text-[#8B7355] hover:text-[#A08B6A] transition-colors">Activities</a></li>
              <li><a href="#contact" className="text-[#8B7355] hover:text-[#A08B6A] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-elegant">Contact Info</h3>
            <ul className="space-y-2 font-classic">
              <li className="flex items-center space-x-2 text-[#8B7355]">
                <Mail className="h-4 w-4 text-[#8B7355]" />
                <span>litableau@annauniv.edu</span>
              </li>
              <li className="flex items-center space-x-2 text-[#8B7355]">
                <Phone className="h-4 w-4 text-[#8B7355]" />
                <span>+91 44 2235 7000</span>
              </li>
              <li className="flex items-center space-x-2 text-[#8B7355]">
                <MapPin className="h-4 w-4 text-[#8B7355]" />
                <span>Anna University, Chennai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#8B7355] mt-8 pt-8 text-center">
          <p className="text-[#8B7355] font-classic">
            © 2024 LITABLEAU - Literary Society of Anna University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
