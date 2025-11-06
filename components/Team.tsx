"use client";

import { Users } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    { name: "Seifeldin Mahmoud", role: "Quantum Architect" },
    { name: "Yamen Munir", role: "AI Engineer" },
    { name: "Samir Eldam", role: "Systems Designer" },
    { name: "Ahmad Wajeeh", role: "Data Scientist" },
    { name: "Imad Khan", role: "Solutions Lead" }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Meet the Minds Behind QuantaNexus
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A team of visionaries pushing the boundaries of quantum computing
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Avatar placeholder */}
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Name */}
              <h3 className="relative text-lg font-bold text-center text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {member.name}
              </h3>

              {/* Role */}
              <p className="relative text-sm text-center text-gray-400">
                {member.role}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
