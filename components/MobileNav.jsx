"use client";

import {Sheet, SheetContent, SheetTrigger} from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';

const links =[
    {
      name: "home",
      path: "/",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "projects",
      path: "/projects",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ]
  

const MobileNav = () => {
    const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className="text-[32px] text-accent"/> 
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/*logo*/}
            <div className='mt-24 mb-10 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        Mahin<span className='text-accent'>.</span>
                    </h1>
                </Link>
            </div>
            {/*nav*/}
            <nav className='flex flex-col gap-8 justify-center items-center'>
            {links.map((link,index)=>{
        return <Link 
                    href={link.path} 
                    key={index} 
                    className={`${link.path===pathname && "text-accent border-b-2 border-accent"}text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>

      })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
