"use client";
import React from "react";
import { BackgroundBeams } from "../components/background-beams";
import { FlipWords } from "../components/flip-words";

export default function BackgroundBeamsWithFlipWords() {
  const words = ["Statics", "Mechanics", "Material Resistance"];

  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-neutral-950">
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Need Expert Help?
        </h1>
        <p className="text-2xl md:text-4xl text-neutral-500 mt-4">
          With over 40 years of experience, we offer top-notch instruction in{" "}
          <span className="text-neutral-200 font-bold">
            <FlipWords words={words} />
          </span>
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
