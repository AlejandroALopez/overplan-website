'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CheckIcon from "../../public/icons/check.svg";
import ClockIcon from "../../public/icons/clock.svg";
import CompassIcon from "../../public/icons/compass.svg";
import BookIcon from "../../public/icons/book.svg";
import UseCasesSection from "./useCasesSection";
import PricingSection from "./pricingSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Section 1: Presentation */}
      <section className="flex flex-col items-center w-full py-24 mt-12 bg-wave-pattern bg-cover">
        <motion.p
          className="z-10 text-5xl font-semibold text-center w-full md:w-[700px] leading-[58px] tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          Unlock Your Potential With AI-Driven Planning
        </motion.p>
        <motion.p
          className="z-10 text-2xl text-center font-light my-12 w-full md:w-[450px] leading-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Let AI create a personalized plan to achieve your goals
        </motion.p>
        <motion.button
          className="z-10 flex items-center justify-center bg-primary rounded-2xl px-10 py-4
            transition hover:scale-110 duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-2xl">Start Now</p>
        </motion.button>
        <motion.p
          className="z-10 text-[#999999] mt-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Get your first plan free!
        </motion.p>
        {/* Background Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
        >
          <Image src={CheckIcon} alt="check icon" className="absolute bottom-96 left-[15%] opacity-40 md:opacity-100 drop-shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          viewport={{ once: true }}
        >
          <Image src={ClockIcon} alt="clock icon" className="hidden md:block absolute bottom-52 left-[25%] opacity-40 md:opacity-100 drop-shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          viewport={{ once: true }}
        >
          <Image src={CompassIcon} alt="compass icon" className="absolute top-20 right-[35%] opacity-40 md:opacity-100 drop-shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          viewport={{ once: true }}
        >
          <Image src={BookIcon} alt="book icon" className="absolute top-48 right-[10%] opacity-40 md:opacity-100 drop-shadow-lg" />
        </motion.div>
      </section>
      {/* Section 2: Features */}
      <section className="flex flex-col bg-bgPrimary w-full p-24 gap-24">
        <motion.div
          className="flex flex-row justify-between items-center flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="flex flex-col gap-4 w-full md:w-[500px]">
            <p className="text-4xl font-semibold">AI creates the plan...</p>
            <p className="text-xl font-light">Let AI make the plan for you, tailored to your specific goal and preferences.</p>
          </div>
          <Image
            src="/img/s2Image1.png"
            alt="s2 image 1"
            width={600 * 1.1}
            height={370 * 1.1}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="bg-gray-300 h-0.5 w-full my-6 rounded-lg" />
        <motion.div
          className="flex flex-row justify-between items-center flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image 
            src="/img/s2Image2.png" 
            alt="s2 image 2" 
            width={600 * 1.1} 
            height={370 * 1.1} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Text Content */}
          <div className="flex flex-col gap-4 w-full md:w-[500px] mt-12 xl:mt-0">
            <p className="text-4xl font-semibold">... so you can focus on progress</p>
            <p className="text-xl font-light">Visualize your weekly tasks on a Kanban Board, making it easy to track progress.</p>
          </div>
        </motion.div>
      </section>
      {/* Section 3: Use Cases */}
      <UseCasesSection />
      {/* Section 4: Pricing */}
      <PricingSection />
      {/* Section 5: Call to Action */}
      <section className="flex flex-col items-center bg-bgPrimary bg-opacity-80 w-full py-20 gap-12">
        <p className="text-4xl font-semibold text-center">Get your perfect plan today!</p>
        <button
          className="flex items-center justify-center bg-primary rounded-2xl px-8 py-3
          transition hover:scale-110 duration-300"
        >
          <p className="text-xl text-white">Start Now</p>
        </button>
      </section>
    </main>
  );
}
