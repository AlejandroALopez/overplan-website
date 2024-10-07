import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { areas, useCases } from "@/constants/useCases";

export default function UseCasesSection() {
    const defaultAnimDuration: number = 0.5;
    const [area, setArea] = useState<string>('Travel');

    const controlsTitle = useAnimationControls();
    const controlsExamples = useAnimationControls();
    const controlsStory = useAnimationControls();

    // Updates area and triggers animation
    const handleAreaChange = async (newArea: string) => {
        setArea(newArea);
        
        // Reset controls
        controlsTitle.set({
            opacity: 0,
            x: -50,
            y: -50,
            transition: { delay: 0 }
        });

        controlsExamples.set({
            opacity: 0,
            x: -50,
            y: 50,
            transition: { delay: 0 }
        });

        controlsStory.set({
            opacity: 0,
            x: 0,
            y: 50,
            transition: { delay: 0 }
        });

         // Trigger animation
        controlsTitle.start({
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: defaultAnimDuration, delay: 0 }
        });
        controlsExamples.start({
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: defaultAnimDuration, delay: 0 }
        });
        controlsStory.start({
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: defaultAnimDuration, delay: 0 }
        });
    }

    return (
        <section className="flex flex-col items-center bg-bgPrimary w-full py-4 gap-4">
            <motion.p
                className="text-3xl text-black font-semibold text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: defaultAnimDuration, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Designed for Diverse Goals
            </motion.p>
            <motion.p
                className="w-10/12 md:w-full text-2xl text-black text-center font-normal my-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: defaultAnimDuration, delay: 0.5 }}
                viewport={{ once: true }}
            >
                Learn a Skill. Build a Routine. And More.
            </motion.p>
            {/* Area Selector */}
            <motion.div
                className="flex flex-row bg-white rounded-3xl drop-shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: defaultAnimDuration, delay: 0.8 }}
                viewport={{ once: true }}
            >
                {areas.map((a) => (
                    <button
                        key={a.area}
                        className={`flex flex-row gap-2 rounded-3xl py-3 px-6 
                            ${a.area === area ? "bg-primary" : "bg-white hover:bg-primary hover:bg-opacity-10"}`}
                        onClick={() => handleAreaChange(a.area)}
                        disabled={a.area === area}
                    >
                        <Image src={a.area === area ? a.imageOn : a.imageOff} alt='travel' />
                        <p className={`hidden md:block ${a.area === area ? "text-white font-medium" : "text-[#999999]"}`}>{a.area}</p>
                    </button>
                ))}
            </motion.div>
            {/* Content (wide screens) */}
            <div className="hidden lg:flex flex-row justify-evenly mt-8 mb-24 w-full">
                {/* Right Content: Title and Examples */}
                <div className="flex flex-col gap-8 w-3/12">
                    {/* Title */}
                    <motion.div
                        className="bg-white p-3 w-full rounded-lg drop-shadow-lg"
                        initial={{ opacity: 0, y: -50, x: -50 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: defaultAnimDuration, delay: 1 }}
                        viewport={{ once: true }}
                        animate={controlsTitle}
                    >
                        <p className="text-2xl text-black font-semibold"><span className="text-primary">{area}</span> Goals</p>
                    </motion.div>
                    {/* Examples */}
                    <motion.div
                        className="flex flex-col bg-white p-4 w-full h-full gap-4 rounded-lg drop-shadow-lg"
                        initial={{ opacity: 0, y: 50, x: -50 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: defaultAnimDuration, delay: 1 }}
                        viewport={{ once: true }}
                        animate={controlsExamples}
                    >
                        <p className="text-black">Some examples:</p>
                        {useCases[area].possibleGoals.map((example: string) => (
                            <div key={example} className="flex flex-row items-center gap-4">
                                <div className="p-1 bg-primary rounded-full" />
                                <p className="font-medium text-black">{example}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
                {/* Left Content: Short Story */}
                <motion.div
                    className="relative flex flex-col bg-white p-4 w-7/12 gap-4 rounded-lg drop-shadow-lg"
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: defaultAnimDuration, delay: 1 }}
                    viewport={{ once: true }}
                    animate={controlsStory}
                >
                    <p className="text-[#999999]">Short Story</p>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl text-black font-semibold">{useCases[area].goal}</p>
                            <p className="text-black">{useCases[area].situation}</p>
                            <p className="text-black">{useCases[area].solution}</p>
                        </div>
                        <div className="relative">
                            <Image
                                // className="absolute top-0 right-0 transform translate-x-1/4"
                                className="translate-x-10 xl:translate-x-20 rounded-lg drop-shadow-lg"
                                src={`/img/${useCases[area].imgName}`}
                                alt="case image"
                                width={321 * 5}
                                height={213 * 5}
                            />
                        </div>
                    </div>
                    <p className="text-[#999999] italic mt-4">&quot;{useCases[area].quote}&quot;</p>
                </motion.div>
            </div>
            {/* Content (small screens) */}
            <div className="lg:hidden flex flex-col items-center gap-8 mt-8 mb-8">
                {/* Title */}
                <motion.div
                    className="bg-white p-3 w-11/12 lg:w-[400px] rounded-lg drop-shadow-lg"
                    initial={{ opacity: 0, y: -50, x: -50 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: defaultAnimDuration, delay: 1 }}
                    viewport={{ once: true }}
                    animate={controlsTitle}
                >
                    <p className="text-2xl text-black font-semibold"><span className="text-primary">{area}</span> Goals</p>
                </motion.div>
                {/* Short Story */}
                <motion.div
                    className="relative flex flex-col bg-white p-4 w-11/12 lg:w-[750px] gap-4 rounded-lg drop-shadow-lg"
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: defaultAnimDuration, delay: 1.2 }}
                    viewport={{ once: true }}
                    animate={controlsStory}
                >
                    <p className="text-[#999999]">Short Story</p>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl text-black font-semibold">{useCases[area].goal}</p>
                            <p className="text-black">{useCases[area].situation}</p>
                            <p className="text-black">{useCases[area].solution}</p>
                        </div>
                        <div className="relative">
                            <Image
                                // className="absolute top-0 right-0 transform translate-x-1/4"
                                className="lg:translate-x-20 rounded-lg drop-shadow-lg"
                                src={`/img/${useCases[area].imgName}`}
                                alt="case image"
                                width={321}
                                height={213}
                            />
                        </div>
                    </div>
                    <p className="text-[#999999] italic mt-4">&quot;{useCases[area].quote}&quot;</p>
                </motion.div>
                {/* Examples */}
                <motion.div
                    className="flex flex-col bg-white p-4 w-11/12 lg:w-[400px] h-full gap-4 rounded-lg drop-shadow-lg"
                    initial={{ opacity: 0, y: 50, x: -50 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: defaultAnimDuration, delay: 0 }}
                    viewport={{ once: true }}
                    animate={controlsExamples}
                >
                    <p className="text-black">Some examples:</p>
                    {useCases[area].possibleGoals.map((example: string) => (
                        <div key={example} className="flex flex-row items-center gap-4">
                            <div className="p-1 bg-primary rounded-full" />
                            <p className="text-black font-medium">{example}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}