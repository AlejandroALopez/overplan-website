'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CheckIcon from "../../public/icons/check.svg";
import ClockIcon from "../../public/icons/clock.svg";
import CompassIcon from "../../public/icons/compass.svg";
import BookIcon from "../../public/icons/book.svg";
import UseCasesSection from "./useCasesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Section 1: Presentation */}
      <section className="flex flex-col items-center w-full py-24 bg-wave-pattern bg-cover">
        <motion.p
          className="text-5xl font-semibold text-center w-[700px] leading-[58px] tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          Unlock Your Potential With AI-Driven Planning
        </motion.p>
        <motion.p
          className="text-2xl text-center font-light my-12 w-[450px] leading-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Let AI create a personalized plan to achieve your goals
        </motion.p>
        <motion.button
          className="flex items-center justify-center bg-primary rounded-2xl px-10 py-4
            transition hover:scale-110 duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-2xl">Start Now</p>
        </motion.button>
        <motion.p
          className="text-[#999999] mt-4 text-lg"
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
          <Image src={CheckIcon} alt="check icon" className="absolute bottom-96 left-56 drop-shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          viewport={{ once: true }}
        >
          <Image src={ClockIcon} alt="clock icon" className="absolute bottom-56 left-[30rem] drop-shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          viewport={{ once: true }}
        >
          <Image src={CompassIcon} alt="compass icon" className="absolute top-20 right-[36rem] drop-shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          viewport={{ once: true }}
        >
          <Image src={BookIcon} alt="book icon" className="absolute top-48 right-48 drop-shadow-lg" />
        </motion.div>
      </section>
      {/* Section 2: Features */}
      <section className="flex flex-col bg-lightPrimary w-full p-24 gap-24">
        <motion.div
          className="flex flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-semibold">AI creates the plan...</p>
            <p className="text-xl font-light w-[500px]">Let AI make the plan for you, tailored to your specific goal and preferences.</p>
          </div>
          <Image src="/img/s2Image1.png" alt="s2 image 1" width={600} height={370} />
        </motion.div>
        <div className="bg-gray-300 h-0.5 w-full my-6 rounded-lg" />
        <motion.div
          className="flex flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src="/img/s2Image2.png" alt="s2 image 2" width={600} height={370} />
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-semibold">... so you can focus on progress</p>
            <p className="text-xl font-light w-[500px]">Visualize your weekly tasks on a Kanban Board, making it easy to track progress.</p>
          </div>
        </motion.div>
      </section>
      {/* Section 3: Use Cases */}
      <UseCasesSection />
      {/* Section 4: Call to Action */}
      <section className="flex flex-col items-center bg-white bg-opacity-80 w-full p-12 gap-8">
        <p className="text-3xl font-semibold">Ready to Achieve Your Goals?</p>
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
