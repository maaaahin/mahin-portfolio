"use client";
import Link from "next/link";
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedin/>, path: ""},
    {icon: <SiLeetcode />, path: ""},
    {icon: <FaTwitter/>, path: ""},
];
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((Item, index)=>{
            return (
                <Link key={index} href={Item.path} className={iconStyles}>
                    {Item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Social
