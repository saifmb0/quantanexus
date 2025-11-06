"use client";

import { Atom, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-3">
              <Atom className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                QuantaNexus
              </span>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Quantum-powered solutions for a better tomorrow
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2025 QuantaNexus. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-t from-blue-600/20 to-transparent blur-2xl" />
    </footer>
  );
}
