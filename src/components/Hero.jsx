import React from "react";
import {
  ServerIcon,
  CloudUploadIcon,
  PaperAirplaneIcon,
  DatabaseIcon,
} from "@heroicons/react/solid";
import "animate.css/animate.min.css";


import bgImg from "../assets/cyber-bg.png";
const Hero = () => {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between bg-zinc-200">
      <div className="grid md:grid-cols-2 m-auto max-w-[1240px]">
        <div className="flex flex-col w-full justify-center md:items-start px-2 py-12 animate-fade-in-up  ">
          <p className="text-2xl ">Unique Sequencing & Production</p>
          <h1 className="text-5xl font-bold py-3 md:text-7xl">
            Recruitment Solutions
          </h1>
          {/* <p className="text-2xl">This is our Tech brand.</p> */}
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-5  
          mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300
          rounded-xl text-center shadow-xl"
        >
          <p>Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
