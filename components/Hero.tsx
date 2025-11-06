"use client";

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm text-gray-300">Powered by Quantum Computing</span>
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent leading-tight">
          Harnessing Quantum.
          <br />
          Solving Complexity.
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
          QuantaNexus delivers quantum-powered solutions for agriculture, supply chain, and climate modeling, 
          turning humanity&apos;s biggest challenges into solvable equations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/agriculture" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 min-w-[200px]">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Explore Agriculture</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link href="/climate-modeling" className="group px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm min-w-[200px]">
            <span className="flex items-center justify-center space-x-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Explore Climate Modeling</span>
            </span>
          </Link>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>
    </section>
  );
}
