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
      className="group relative surface-elevated rounded-lg p-6 transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${gradient}`}
      />

      {/* Icon */}
      <div className="relative mb-5">
        <div
          className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center shadow-glow transition-all duration-300 group-hover:scale-105`}
        >
          <Icon size={24} strokeWidth={2.5} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>

        {/* Stats */}
        <div className="mb-5 py-2.5 px-4 bg-primary/5 rounded-md border border-primary/10">
          <p className="text-primary font-semibold text-sm">{stats}</p>
        </div>

        {/* Features */}
        <div className="space-y-1.5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-muted-foreground text-xs leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>

        {/* Hover indicator */}
        <div
          className={`mt-5 flex items-center gap-1.5 text-primary font-medium text-sm transition-all duration-200 ${
            isHovered ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'
          }`}
        >
          <span>Learn more</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
