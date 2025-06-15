
import React from "react";

const PromptRenfortLogo: React.FC<{className?: string}> = ({ className }) => (
  <img
    src="/lovable-uploads/4742d357-a0c8-4beb-a803-43620dc768b6.png"
    alt="Prompt Renfort Logo"
    className={className || "w-44 md:w-64 mx-auto block mb-4"}
    draggable={false}
    style={{userSelect: "none"}}
  />
);

export default PromptRenfortLogo;
