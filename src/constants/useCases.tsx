interface UseCase {
    field: string,
    possibleGoals: string[],
    goal: string,
    situation: string,
    solution: string,
    quote: string,
    imgName: string,
}

const travelCase: UseCase = {
    field: "Travel",
    possibleGoals: [
        "Tour the historical sites of Kyoto",
        "Hike the Appalachian Trail from Georgia to Maine",
        "Visit places of interest in Boston",
        "Tour the art museums in Paris",
        "Take a food tour in Lima",
        "Visit the highlights of Berlin"
    ],
    goal: "Tour Museums and Restaurants in Florence, Italy",
    situation: "Marcus had always dreamed of experiencing the rich culture and cuisine of Florence. ",
    solution: "OverPlan AI created a detailed itinerary that included visits to all the major museums \
        and the best local restaurants, spread out over a week to ensure a relaxed yet fulfilling trip.",
    quote: "My trip to Florence was amazing! OverPlan AI made sure I didn't miss any of the highlights \
        and helped me enjoy every moment without feeling rushed.",
    imgName: "travel.png"
}

export const useCases: UseCase[] = [
    travelCase
]