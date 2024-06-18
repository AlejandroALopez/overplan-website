import Image from "next/image";
import { useState } from "react";
import { areas, useCases } from "@/constants/useCases";

export default function UseCasesSection() {
    const [area, setArea] = useState<string>('Travel');

    return (
        <section className="flex flex-col items-center bg-[#F7F7F7] w-full py-4 gap-4">
            <p className="text-3xl font-semibold text-center mt-12">Designed for Diverse Goals</p>
            <p className="text-2xl text-center font-light my-6">Learn a Skill. Build a Routine. And More.</p>
            {/* Area Selector */}
            <div className="flex flex-row bg-white rounded-3xl drop-shadow-lg">
                {areas.map((a) => (
                    <button
                        key={a.area}
                        className={`flex flex-row gap-2 rounded-3xl py-3 px-6 
                            ${a.area === area ? "bg-primary" : "bg-white hover:bg-primary hover:bg-opacity-10"}`}
                        onClick={() => setArea(a.area)}
                    >
                        <Image src={a.area === area ? a.imageOn : a.imageOff} alt='travel' />
                        <p className={`${a.area === area ? "text-white font-medium" : "text-[#999999]"}`}>{a.area}</p>
                    </button>
                ))}
            </div>
            <div className="flex flex-row gap-24 mt-8 mb-24">
                <div className="flex flex-col gap-8">
                    <div className="bg-white p-3 w-[400px] rounded-lg drop-shadow-lg">
                        <p className="text-2xl font-semibold"><span className="text-primary">{area}</span> Goals</p>
                    </div>
                    {/* Examples */}
                    <div className="flex flex-col bg-white p-4 w-[400px] h-full gap-4 rounded-lg drop-shadow-lg">
                        {useCases[area].possibleGoals.map((example: string) => (
                            <div key={example} className="flex flex-row items-center gap-4">
                                <div className="p-1 bg-primary rounded-full" />
                                <p className="font-medium">{example}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Short Story */}
                <div className="relative flex flex-col bg-white p-4 w-[750px] gap-4 rounded-lg drop-shadow-lg">
                    <p className="text-[#999999]">Short Story</p>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl font-semibold">{useCases[area].goal}</p>
                            <p className="">{useCases[area].situation}</p>
                            <p className="">{useCases[area].solution}</p>
                        </div>
                        <div className="relative">
                            <Image
                                // className="absolute top-0 right-0 transform translate-x-1/4"
                                className="translate-x-20 rounded-lg drop-shadow-lg"
                                src={`/img/${useCases[area].imgName}`}
                                alt="case image"
                                width={321*5}
                                height={213*5} 
                            />
                        </div>
                    </div>
                    <p className="text-[#999999] italic mt-4">&quot;{useCases[area].quote}&quot;</p>
                </div>
            </div>
        </section>
    )
}