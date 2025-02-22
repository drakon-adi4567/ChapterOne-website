import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Updated colors to fit new theme
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#1E3A8A" // Deep Blue
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#F59E0B" // Warm Orange
        />
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw]" 
          fill="#EAB308" // Muted Gold
        />
      </div>

      {/**
       *  UI: Grid
       *  Changed background and grid colors
       */}
      <div
        className="h-screen w-full bg-[#F0EFEB] dark:bg-[#F0EFEB] bg-grid-[#2A3335]/[0.03] dark:bg-grid-[#2A3335]/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#F0EFEB]
         dark:bg-[#F0EFEB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-[#2A3335] max-w-80">
            Chapter One 
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *  Updated text size for responsiveness
           */}
          <TextGenerateEffect
            words="A Brighter Future For Every Child"
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-[#2A3335]"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-[#2A3335]">
             To empower every displaced child with knowledge, creativity, and resilience, 
             helping them turn adversity into opportunity and a brighter future.
          </p>
          
          {/** 
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
