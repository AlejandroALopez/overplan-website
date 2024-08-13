interface PricePlan {
    name: string,
    price: number, // $/mo
    note: boolean, // text below price (true for priced plan)
    benefits: string[],
}

export const pricePlans: PricePlan[] = [
    {
        name: 'Free',
        price: 0,
        note: false,
        benefits: ["2 Free Plans"],
    },
    {
        name: 'Pro',
        price: 5,
        note: true,
        benefits: ["Up to 10 plans per month", "Multi-Plan support"],
    }
]