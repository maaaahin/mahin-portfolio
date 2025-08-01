"use client";
import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Internships Completed"
    },
    {
        num: 3,
        text: "Certifications Completed"
    },
    {
        num: 15,
        text: "Technologies Mastered"
    },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="contaniner mx-auto">
            <div className="flex flex-wrap gap-4 max-w-[90vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-center" key={index}>
                            <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"                                    
                            />
                            <p className={`${item.text.length<15? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    );     
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
