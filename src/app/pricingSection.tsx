'use client';

import { motion } from "framer-motion";
import { pricePlans } from "@/constants/pricePlans";

const planColorMatch: { [key: string]: string } = {
    'Free': 'bg-[#D9D9D9]',
    'Pro': 'bg-[#1A79E5]'
}

export default function PricingSection() {
    const defaultAnimDuration: number = 0.8;

    return (
        <section className="flex flex-col items-center bg-bgPrimary w-full gap-12 px-4">
            {/* Headlines */}
            <div className="flex flex-col items-center mt-24 gap-6">
                <motion.p
                    className="text-4xl md:text-5xl text-black font-semibold text-center w-full md:w-[700px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: defaultAnimDuration, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Achieve your goals. Try free.
                </motion.p>
                <motion.p
                    className="w-11/12 md:w-full text-lg md:text-xl text-[#666666] text-center font-light max-w-[450px] leading-9"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: defaultAnimDuration, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Explore OverPlan AI. No credit card required.
                </motion.p>
            </div>
            {/* Price Options */}
            <div className="flex flex-col-reverse md:flex-row justify-center gap-16 mb-12">
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
                            <p className="text-4xl text-black font-semibold">${plan.price}/mo</p>
                            {plan.note && <p className="text-sm text-[#808080] mt-1">billed monthly</p>}
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
                        >
                            <p className="text-xl font-medium">Start for free</p>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}