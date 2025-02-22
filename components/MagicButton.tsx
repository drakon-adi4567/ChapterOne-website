import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* Adding the yellowish border highlights with hover effect */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFEB3B_0%,#FFEB3B_50%,#FFEB3B_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#FF9800_0%,#FF9800_50%,#FF9800_100%)]" />

      {/* Subtle gradient from one white to another white, with yellow borders */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-gradient-to-r from-[#ffffff] to-[#f5f5f5] text-sm font-medium text-yellow-500 border-2 border-yellow-500 backdrop-blur-3xl gap-2 
             group-hover:bg-gradient-to-r from-[#f5f5f5] to-[#ffffff] group-hover:border-yellow-400 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
