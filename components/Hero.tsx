/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FollowPointer } from "./ui/FollowingPointer";
import Image from "next/image";
import RotatingBorder from "./ui/ProfileImage";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
        
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 relative items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-start text-blue-100 ">
            Welcome to My Digital Workspace
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-start text-[40px] md:text-xl lg:text-4xl"
          />

          <p className="text-start font-poppins md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi! I&apos;m Souban, a Next.js Developer based in India 📍
          </p>
          <div className="flex   justify-start items-center gap-3 ">
            <a href="#about">
              <MagicButton
                title="My works"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="/soubanResume.pdf" download>
              <MagicButton
                title="Download cv"
                icon={<FaDownload />}
                position="right"
              />
            </a>

          </div>
        </div>
        {/* <ProfileCircle />
         */}
        <RotatingBorder />


      </div>
    </div>
  );
};

export default Hero;


