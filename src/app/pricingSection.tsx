'use client';

import { useState } from "react";
import { pricePlans } from "@/constants/pricePlans";

const planColorMatch: { [key: string]: string } = {
    'Free': 'bg-[#D9D9D9]',
    'Pro': 'bg-[#1A79E5]'
}

export default function PricingSection() {
    const [isMonthPrice, setIsMonthPrice] = useState<boolean>(false);

    const handleStart = () => {
        // TODO: Redirect to product
    }

    return (
        <section className="flex flex-col items-center bg-bgPrimary w-full gap-4">
            {/* Headlines */}
            <div className="flex flex-col items-center mt-24 gap-6">
                <p
                    className="text-4xl md:text-5xl font-semibold text-center max-w-[700px] leading-[58px] tracking-tight"
                >
                    Achieve your goals. Try free.
                </p>
                <p
                    className="w-10/12 md:w-full text-lg md:text-xl text-[#666666] text-center font-light max-w-[450px] leading-9"
                >
                    Explore OverPlan AI. No credit card required.
                </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-row items-center justify-center gap-4 my-12">
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
            </div>
            {/* Price Options */}
            <div className="flex flex-row flex-wrap justify-center gap-16 mb-12">
                {pricePlans.map((plan) => (
                    <div
                        key={plan.name}
                        className="flex flex-col items-center bg-white rounded-2xl w-72 h-96 gap-4 
                            drop-shadow-lg"
                    >
                        <div className={`w-full h-4 ${planColorMatch[plan.name]} rounded-t-2xl`} />
                        <p className="text-xl font-medium">{plan.name}</p>
                        <div className="flex flex-col items-center my-4 h-12">
                            <p className="text-4xl font-semibold">${isMonthPrice ? plan.priceMonthly : plan.priceYearly}/mo</p>
                            {plan.note && <p className="text-sm text-[#808080] mt-1">{plan.note}</p>}
                        </div>
                        <div className="flex flex-col items-center gap-2 w-full">
                            {plan.benefits.map((benefit) => (
                                <p key={benefit}>{benefit}</p>
                            ))}
                        </div>
                        <button
                            className="flex items-center justify-center rounded-2xl mt-auto m-4 py-3 px-14 text-primary
                            transition hover:scale-110 hover:bg-primary hover:text-white duration-300 border-2 border-primary"
                            onClick={() => handleStart()}
                        >
                            <p className="text-xl">Start for free</p>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}