"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/workSliderBtns";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "mittiMate",
    title: "Project 1",
    description: "Designed and developed the front-end for MittiMate, a web platform that aims to empower farmers by offering personalized, data-driven fertilizer recommendations. The platform integrates real-time data on soil health, crop type, and weather patterns to provide sustainable and cost-effective solutions.",
    stack: [{name: "React", color: "blue"},],
    image: "/assets/work/thumb1.png",
    live: "https://mitti-mate.vercel.app/",
    github: "https://github.com/maaaahin/MittiMate-Frontend"
  },
  {
    num: "02",
    category: "Portfolio Webisite",
    title: "Project 3",
    description: "A sleek and responsive portfolio website built using Next.js, React, and Tailwind CSS. Designed for performance and seamless user experience, it showcases my skills, projects, experience, and certifications in a visually appealing way. With fast navigation and a modern UI, this portfolio reflects my expertise as a developer while ensuring accessibility and responsiveness across all devices.",
    stack: [{name: "React", color: "blue"}, {name: "Next.js", color: "black"}, {name: "TailwindCSS", color: "gray"}],
    image: "/assets/work/thumb1.png",
    live: "https://portfolio-mahin.vercel.app/",
    github: "https://github.com/maaaahin/mahin-portfolio"
  },
  {
    num: "02",
    category: "InvestInsight - Stock Dashboard",
    title: "Project 2",
    description: "InvestInsight is a stock analysis platform built with Next.js, React, and Tailwind CSS, offering real-time financial insights. It enables users to analyze stock prices, track financial statements, and access sentiment-driven news analysis. The platform features interactive charts, fundamental data retrieval, AI-powered stock suggestions using A Search, and financial news sentiment analysis* to help investors make informed decisions.",
    stack: [{name: "Streamlit", color: "blue"}, {name: "Yahoo Finance", color: "black"},],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/maaaahin/Stock-Dashboard-Streamlit"
  },
  {
    num: "03",
    category: "Portfolio Webisite",
    title: "Project 3",
    description: "A sleek and responsive portfolio website built using Next.js, React, and Tailwind CSS. Designed for performance and seamless user experience, it showcases my skills, projects, experience, and certifications in a visually appealing way. With fast navigation and a modern UI, this portfolio reflects my expertise as a developer while ensuring accessibility and responsiveness across all devices.",
    stack: [{name: "React", color: "blue"}, {name: "Next.js", color: "black"}, {name: "TailwindCSS", color: "gray"}],
    image: "/assets/work/thumb1.png",
    live: "https://portfolio-mahin.vercel.app/",
    github: "https://github.com/maaaahin/mahin-portfolio"
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  }

  return (
    <motion.section 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
              </div>
              {/*project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                  );
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*live project button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}> 
                {projects.map((item, index) => {
                  return <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/1- z-10"></div>
                      {/*image */}
                      <div className="relative w-full h-full">
                        <Image className="object-cover" src={project.image} fill alt=""></Image>
                      </div>
                    </div></SwiperSlide>;
                })}
                {/*slider buttons*/}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>

    </motion.section>
    );
};
export default Work;
  