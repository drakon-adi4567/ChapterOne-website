"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 bg-[#F0EFEB]">
      <h1 className="heading text-[#2A3335]">
        My <span className="text-[#F59E0B]">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Phase 1"
          icon={<AceternityIcon order="Phase 1" />}
          des="Initial planning and research phase."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-[#1E3A8A] rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Phase 2"
          icon={<AceternityIcon order="Phase 2" />}
          des="Design and prototyping stage."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#F59E0B] rounded-3xl overflow-hidden"
            colors={[[255, 166, 158], [221, 255, 247]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Phase 3"
          icon={<AceternityIcon order="Phase 3" />}
          des="Development and implementation."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#EAB308] rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "#F0EFEB",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-black opacity-30" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-[#F59E0B] group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 text-center group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#2A3335" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#F0EFEB] px-5 py-2 text-[#F59E0B] backdrop-blur-3xl font-bold text-2xl">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
