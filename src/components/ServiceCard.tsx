'use client';

import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  features: string[];
  gradient: string;
}

export function ServiceCard({ icon: Icon, title, description, stats, features, gradient }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-card border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
        isHovered ? 'shadow-lg' : 'shadow-md'
      }`}
      style={{
        boxShadow: isHovered
          ? '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.2)'
          : '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`}
      />

      {/* Icon */}
      <div className="relative mb-6">
        <div
          className={`w-16 h-16 rounded-xl ${gradient} flex items-center justify-center shadow-glow-blue transition-all duration-500 group-hover:scale-110`}
        >
          <Icon size={32} strokeWidth={2} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 mb-4 leading-relaxed">{description}</p>

        {/* Stats */}
        <div className="mb-6 py-4 px-5 bg-white/5 rounded-lg border border-white/10">
          <p className="text-primary font-semibold text-lg">{stats}</p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-white/60 text-sm">{feature}</p>
            </div>
          ))}
        </div>

        {/* Hover indicator */}
        <div
          className={`mt-6 flex items-center gap-2 text-primary font-semibold transition-all duration-300 ${
            isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
          }`}
        >
          <span>Learn more</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
