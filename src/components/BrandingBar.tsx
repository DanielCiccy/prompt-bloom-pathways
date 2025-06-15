
import React from "react";

// OpenAI SVG logo (black, style minimal)
const OpenAILogo = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-label="OpenAI logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle cx="20" cy="20" r="20" fill="#fff"/>
      <path fill="#151515" d="M29.346 11.73c-2.352-1.364-5.018-1.47-7.23-.367A5.62 5.62 0 0 0 16.5 14.55l-1.342.775a5.715 5.715 0 0 0-2.962 4.733l-.006 1.55-1.343.775A7.533 7.533 0 0 0 9.5 28.535c.599 2.192 2.06 4.154 4.187 5.355 2.126 1.202 4.727 1.182 6.816-.092l1.346-.776-.006-1.553 1.344-.775c2.128-1.202 3.589-3.165 4.188-5.357a7.533 7.533 0 0 0-2.047-6.872c-2.136-1.22-4.726-1.18-6.816.092l-1.346.776.006 1.553-1.344.775a5.62 5.62 0 0 0-2.18 3.498zm-9.6 9.062a3.715 3.715 0 0 1 1.557-2.711l1.341-.775a3.71 3.71 0 0 1 3.244-.037 3.715 3.715 0 0 1 1.557 2.71l.007 1.553a3.715 3.715 0 0 1-1.557 2.711l-1.341.775a3.715 3.715 0 0 1-3.244.037 3.715 3.715 0 0 1-1.557-2.71z"/>
    </g>
  </svg>
);

// Lovable SVG logo (simple heart handled icon)
const LovableLogo = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-label="Lovable logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle cx="20" cy="20" r="20" fill="#fff"/>
      <path fill="#f46262" d="M28 15.5c0-2.205-1.567-4-4-4-1.745 0-2.73 1.058-3.22 1.947-.49-.89-1.475-1.947-3.22-1.947-2.433 0-4 1.795-4 4 0 4.33 7.22 8.5 7.22 8.5s7.22-4.17 7.22-8.5z"/>
    </g>
  </svg>
);

const BrandingBar: React.FC = () => (
  <div className="flex flex-row items-center justify-center gap-4 mt-1 mb-3 select-none opacity-90">
    <div className="flex flex-row items-center gap-1">
      <OpenAILogo />
      <span className="text-xs text-gray-700 font-medium ml-1">powered by OpenAI</span>
    </div>
    <div className="flex flex-row items-center gap-1">
      <LovableLogo />
      <span className="text-xs text-pink-500 font-medium ml-1">coproduction Lovable</span>
    </div>
  </div>
);

export default BrandingBar;
