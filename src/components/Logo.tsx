'use client';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`kreativa-logo-icon ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Swoosh/Arc element */}
        <path
          d="M 20 35 Q 35 15, 55 20 Q 70 25, 80 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="text-white"
          opacity="0.9"
        />
        <path
          d="M 23 38 Q 37 20, 55 24 Q 68 28, 77 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="text-white/60"
          opacity="0.6"
        />

        {/* K Letter */}
        <g className="text-white">
          {/* Vertical stem of K */}
          <rect x="35" y="45" width="6" height="45" fill="currentColor" rx="1" />

          {/* Upper diagonal of K */}
          <path
            d="M 41 65 L 63 45 L 68 48 L 46 68 Z"
            fill="currentColor"
          />

          {/* Lower diagonal of K */}
          <path
            d="M 46 68 L 68 90 L 63 93 L 41 71 Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}
