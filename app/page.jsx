
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

//components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello<br /> <span className="text-accent">I'm Mahin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Turning ideas into reality, one line of code at a time.
            </p>
            
            {/*buttons and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" asChild className="uppercase flex items-center gap-2">
              <a href="https://drive.google.com/file/d/1X8M7BKsAawUx7-Ni5WrusJww1UEKMUx6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </a>
            </Button>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center bg-accent items-center text-primary text-base hover:bg-primary hover:text-accent hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>  
      </div>
      <Stats/>
    </section>

  )
}

export default Home

