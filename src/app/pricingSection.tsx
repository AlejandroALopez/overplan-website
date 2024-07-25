'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { pricePlans } from "@/constants/pricePlans";

const planColorMatch: { [key: string]: string } = {
    'Free': 'bg-[#D9D9D9]',
    'Pro': 'bg-[#1A79E5]'
}

export default function PricingSection() {
    const defaultAnimDuration: number = 0.8;
    const [isMonthPrice, setIsMonthPrice] = useState<boolean>(false);

    const handleStart = () => {
        // TODO: Redirect to product
    }

    return (
        <section className="flex flex-col items-center bg-bgPrimary w-full gap-4">
            {/* Headlines */}
            <div className="flex flex-col items-center mt-24 gap-6">
                <motion.p
                    className="text-4xl md:text-5xl text-black font-semibold text-center max-w-[700px] leading-[58px] tracking-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: defaultAnimDuration, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Achieve your goals. Try free.
                </motion.p>
                <motion.p
                    className="w-10/12 md:w-full text-lg md:text-xl text-[#666666] text-center font-light max-w-[450px] leading-9"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: defaultAnimDuration, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Explore OverPlan AI. No credit card required.
                </motion.p>
            </div>
            {/* Buttons */}
            <motion.div
                className="flex flex-row items-center justify-center gap-4 my-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: defaultAnimDuration, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <button
                    className={`flex items-center justify-center rounded-2xl px-4 py-2 drop-shadow-lg
                    transition hover:scale-110 duration-300 ${isMonthPrice ? "bg-primary" : "bg-white"}`}
                    onClick={() => setIsMonthPrice(true)}
                >
                    <p className={`text-lg font-medium ${isMonthPrice ? "text-white" : "text-black"}`}>Monthly</p>
                </button>
                <button
                    className={`flex items-center justify-center rounded-2xl px-4 py-2 drop-shadow-lg
                    transition hover:scale-110 duration-300 ${!isMonthPrice ? "bg-primary" : "bg-white"}`}
                    onClick={() => setIsMonthPrice(false)}
                >
                    <p className={`text-lg font-medium ${!isMonthPrice ? "text-white" : "text-black"}`}>Yearly</p>
                </button>
                <div className="flex items-center justify-center h-6 px-2 bg-primary bg-opacity-20 ">
                    <p className="text-primary font-medium">20% off</p>
                </div>
            </motion.div>
            {/* Price Options */}
            <div className="flex flex-row flex-wrap justify-center gap-16 mb-12">
                {pricePlans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        className="flex flex-col items-center bg-white rounded-2xl w-72 h-96 gap-4 
                            drop-shadow-lg"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: defaultAnimDuration, delay: 1 + (index * 0.2) }}
                        viewport={{ once: true }}
                    >
                        <div className={`w-full h-4 ${planColorMatch[plan.name]} rounded-t-2xl`} />
                        <p className="text-xl text-black font-medium">{plan.name}</p>
                        <div className="flex flex-col items-center my-4 h-12">
                            <p className="text-4xl text-black font-semibold">${isMonthPrice ? plan.priceMonthly : plan.priceYearly}/mo</p>
                            {plan.note && <p className="text-sm text-[#808080] mt-1">{isMonthPrice ? "billed monthly" : "billed annually"}</p>}
                        </div>
                        <div className="flex flex-col items-center gap-2 w-full">
                            {plan.benefits.map((benefit) => (
                                <p key={benefit} className="text-black">{benefit}</p>
                            ))}
                        </div>
                        <a
                            href={process.env.NEXT_PUBLIC_APP_URL}
                            className="flex items-center justify-center rounded-2xl mt-auto m-4 py-3 px-14 text-primary
                            transition hover:scale-110 hover:bg-primary hover:text-white duration-300 border-2 border-primary"
                            onClick={() => handleStart()}
                        >
                            <p className="text-xl">Start for free</p>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}