interface PricePlan {
    name: string,
    priceMonthly: number, // $/mo, monthly option
    priceYearly: number, // $/mo, yearly option
    note: boolean, // text below price (true for priced plan)
    benefits: string[],
}

export const pricePlans: PricePlan[] = [
    {
        name: 'Free',
        priceMonthly: 0,
        priceYearly: 0,
        note: false,
        benefits: ["2 Free Plans"],
    },
    {
        name: 'Pro',
        priceMonthly: 5,
        priceYearly: 4,
        note: true,
        benefits: ["Up to 10 plans per month", "Multi-Plan support"],
    }
]