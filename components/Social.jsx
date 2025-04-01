"use client";
import Link from "next/link";
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const socials = [
    {icon: <FaGithub/>, path: "https://github.com/maaaahin"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/mahin-chandwani-044a78148/"},
];
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((Item, index)=>{
            return (
                <Link key={index} href={Item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {Item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Social
