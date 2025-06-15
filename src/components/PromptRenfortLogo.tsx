
import React from "react";

// Displays the new transparent logo
const PromptRenfortLogo: React.FC<{className?: string}> = ({ className }) => (
  <img
    src="/lovable-uploads/1fcfeee0-9686-44ed-a718-2cc5a67e4204.png"
    alt="Prompt Renfort Logo"
    className={className || "w-48 md:w-72 mx-auto block mb-4"}
    draggable={false}
    style={{ userSelect: "none" }}
  />
);

export default PromptRenfortLogo;
