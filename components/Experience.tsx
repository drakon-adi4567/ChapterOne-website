import React from "react";

import { Approach } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-[#2A3335]">
        What <span className="text-[#F59E0B]">We Do.</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {Approach.map((card) => (
          <Button
            key={card.id}
            // Random duration for a fun effect
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "#D8D4D0", // Slightly darker shade of white
  backgroundColor: "linear-gradient(90deg, rgba(216,212,208,1) 0%, rgb(245, 245, 245) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
              border: "2px solid #F59E0B", // Yellow border
              boxShadow: "0 4px 20px rgba(245, 158, 11, 0.5)", // Yellow glow effect
            }}
            className="flex-1 text-[#2A3335] dark:text-[#F0EFEB] border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-[#F59E0B]">
                  {card.title}
                </h1>
                <p className="text-start text-[#2A3335] mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
