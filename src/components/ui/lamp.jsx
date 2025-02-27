"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const LampContainer = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem]"
        >
          <div className="absolute h-[100px] w-[100px] bg-cyan-500 rounded-full left-[50%] translate-x-[-50%] blur-[90px] top-1/2" />
          <div className="absolute h-[100px] w-[100px] bg-rose-500 rounded-full left-[50%] translate-x-[-50%] blur-[90px] top-1/2" />
        </motion.div>

        {/* Spotlight effect */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-10 h-[40rem] w-[40rem] bg-gradient-to-b from-cyan-500 via-transparent to-transparent opacity-20 blur-2xl"
        />

        {/* Center line */}
        <motion.div
          initial={{ width: "15rem", opacity: 0 }}
          whileInView={{ width: "30rem", opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />

        {/* Content container */}
        <div className="relative z-50 flex flex-col items-center px-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export { LampContainer }; 