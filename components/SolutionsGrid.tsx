"use client";

import Link from 'next/link';
import { Leaf, Globe, Network, ArrowUpRight } from 'lucide-react';

export default function SolutionsGrid() {
  const solutions = [
    {
      icon: Leaf,
      title: "Quantum Agriculture",
      description: "Enhancing productivity and sustainability through quantum-enhanced analysis of crop data, climate patterns, and supply chain efficiency.",
      gradient: "from-green-500 to-emerald-600",
      delay: "0s",
      href: "/agriculture"
    },
    {
      icon: Globe,
      title: "Climate Modeling",
      description: "Applying quantum computing to create more precise climate models, aiding in the prediction and mitigation of climate change impacts.",
      gradient: "from-blue-500 to-cyan-600",
      delay: "0.1s",
      href: "/climate-modeling"
    },
    {
      icon: Network,
      title: "Supply Chain",
      description: "Leveraging quantum algorithms to improve supply chain efficiency, reducing costs and enhancing the global flow of goods.",
      gradient: "from-purple-500 to-pink-600",
      delay: "0.2s",
      href: null
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Breakthrough quantum technologies solving real-world problems across critical industries
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const CardContent = (
              <>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Glow effect */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${solution.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${solution.gradient} blur-xl -z-10`} />
              </>
            );

            if (solution.href) {
              return (
                <Link
                  key={index}
                  href={solution.href}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500 rounded-2xl p-8 transition-all duration-500 backdrop-blur-sm overflow-hidden block"
                  style={{ animationDelay: solution.delay }}
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: solution.delay }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
