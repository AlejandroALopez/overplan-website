interface PricePlan {
    name: string,
    priceMonthly: number, // $/mo, monthly option
    priceYearly: number, // $/mo, yearly option
    note?: string, // text below price
    benefits: string[],
}

export const pricePlans: PricePlan[] = [
    {
        name: 'Free',
        priceMonthly: 0,
        priceYearly: 0,
        benefits: ["1 Free Plan"],
    },
    {
        name: 'Pro',
        priceMonthly: 5,
        priceYearly: 4,
        note: "billed annually",
        benefits: ["Up to 10 plans per month", "Multi-Plan support"],
    }
]