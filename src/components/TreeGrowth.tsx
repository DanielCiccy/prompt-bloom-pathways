
import React from "react";

// Each "leaf" is a colored SVG ellipse with a subtle pop-in.
const leafColors = ["#21a179", "#ff9911", "#297373", "#ffbf69", "#145374"];

interface TreeGrowthProps {
  count: number;
}

const TreeGrowth: React.FC<TreeGrowthProps> = ({ count }) => (
  <div className="flex flex-col items-center w-28 md:w-40 mx-auto mb-2 select-none">
    <svg
      viewBox="0 0 160 220"
      width="100%"
      height="170"
      className="mb-2"
      style={{ minHeight: 170 }}
    >
      {/* Trunk */}
      <rect x="72" y="135" width="16" height="60" rx="8" fill="#7c4700" />
      {/* Leaves */}
      {[...Array(count)].map((_, idx) => {
        const angle = 120 - idx * (90 / Math.max(1, count - 1)); // Spread leaves top arc
        const rad = (angle * Math.PI) / 180;
        const cx = 80 + 55 * Math.cos(rad);
        const cy = 135 - 55 * Math.sin(rad);
        return (
          <ellipse
            key={idx}
            cx={cx}
            cy={cy}
            rx="20"
            ry="26"
            fill={leafColors[idx % leafColors.length]}
            opacity={0.92 - (idx * 0.05)}
            className="animate-fade-in"
          />
        );
      })}
      {/* Ground shadow */}
      <ellipse cx="80" cy="205" rx="32" ry="10" fill="#ddd" opacity="0.56" />
    </svg>
    <div className="text-xs text-muted-foreground mt-1">{count} {count === 1 ? "leaf" : "leaves"}</div>
  </div>
);

export default TreeGrowth;
