"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Project 1",
    description: "Project 1 description",
    stack: [{name: "React", color: "blue"}, {name: "Next.js", color: "black"}, {name: "TailwindCSS", color: "gray"}],
    image: "/assets/images/projects/project1.png",
    live: "",
    github: ""
  },
  {
    num: "01",
    category: "Web Development",
    title: "Project 1",
    description: "Project 1 description",
    stack: [{name: "React", color: "blue"}, {name: "Next.js", color: "black"}, {name: "TailwindCSS", color: "gray"}],
    image: "/assets/images/projects/project1.png",
    live: "",
    github: ""
  },
  {
    num: "01",
    category: "Web Development",
    title: "Project 1",
    description: "Project 1 description",
    stack: [{name: "React", color: "blue"}, {name: "Next.js", color: "black"}, {name: "TailwindCSS", color: "gray"}],
    image: "/assets/images/projects/project1.png",
    live: "",
    github: ""
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl: flex-rox xl:gap-[30px] ">
          <div className="w-full xl:w-[50%]">text</div>
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">slider</div>
        </div>
      </div>

    </motion.section>
    );
};
export default Work;
  