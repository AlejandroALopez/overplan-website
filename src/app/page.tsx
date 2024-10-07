'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import FeatureImg1 from "../../public/img/ss1.svg";
import FeatureImg2 from "../../public/img/ss2.svg";
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
      <section className="flex flex-col items-center w-full py-24 px-4 mt-12 bg-wave-pattern bg-cover">
        <motion.p
          className="z-10 text-5xl text-black font-semibold text-center w-full md:w-[700px] leading-[58px] tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          Achieve More With AI-Driven Planning
        </motion.p>
        <motion.p
          className="z-10 text-2xl text-black text-center font-normal my-12 w-full md:w-[450px] leading-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Let AI create a personalized plan to achieve your goals
        </motion.p>
        <motion.a
          href={process.env.NEXT_PUBLIC_APP_URL}
          className="z-10 flex items-center justify-center bg-primary rounded-2xl px-10 py-4
            transition hover:scale-110 duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white font-medium text-2xl">Start Now</p>
        </motion.a>
        <motion.p
          className="z-10 text-[#999999] mt-4 text-center text-lg"
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
          <Image src={CheckIcon} alt="check icon" className="absolute bottom-96 left-[15%] opacity-40 md:opacity-100 drop-shadow-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          viewport={{ once: true }}
        >
          <Image src={ClockIcon} alt="clock icon" className="hidden md:block absolute bottom-52 left-[25%] opacity-40 md:opacity-100 drop-shadow-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          viewport={{ once: true }}
        >
          <Image src={CompassIcon} alt="compass icon" className="absolute top-20 right-[35%] opacity-40 md:opacity-100 drop-shadow-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          viewport={{ once: true }}
        >
          <Image src={BookIcon} alt="book icon" className="absolute top-48 right-[10%] opacity-40 md:opacity-100 drop-shadow-md" />
        </motion.div>
      </section>
      {/* Section 2: Features */}
      <section className="flex flex-col bg-bgPrimary w-full py-24 px-4 md:px-12 lg:px-24 gap-24">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full md:w-[500px]">
            <p className="text-4xl text-black font-semibold"> AI creates the plan...</p>
            <p className="text-xl text-black font-normal">
              Let AI make the plan for you, tailored to your specific goal and preferences.
            </p>
          </div>
          <Image
            src={FeatureImg1}
            alt="s2 image 1"
            width={600 * 1.1}
            height={370 * 1.1}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="bg-gray-300 h-0.5 w-full my-6 rounded-lg" />
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 w-11/12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={FeatureImg2}
            alt="s2 image 2"
            width={600 * 1.1}
            height={370 * 1.1}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full md:w-[500px] mt-12 xl:mt-0">
            <p className="text-4xl text-black font-semibold">... so you can focus on progress</p>
            <p className="text-xl text-black font-normal">Visualize your weekly tasks on a Kanban Board, making it easy to track progress.</p>
          </div>
        </motion.div>
      </section>
      {/* Section 3: Use Cases */}
      <UseCasesSection />
      {/* Section 4: Pricing */}
      <PricingSection />
      {/* Section 5: Call to Action */}
      <section className="flex flex-col items-center bg-bgPrimary w-full py-20 px-4 gap-12">
        <p className="text-4xl text-black font-semibold text-center">Get your perfect plan today!</p>
        <a
          href={process.env.NEXT_PUBLIC_APP_URL}
          className="flex items-center justify-center bg-primary rounded-2xl px-8 py-3
          transition hover:scale-110 duration-300"
        >
          <p className="text-xl font-medium text-white">Start Now</p>
        </a>
      </section>
    </main>
  );
}
