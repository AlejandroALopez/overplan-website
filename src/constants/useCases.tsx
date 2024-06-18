import { StaticImport } from "next/dist/shared/lib/get-img-props";

import TravelOn from "../../public/areaSelector/travelOn.svg";
import TravelOff from "../../public/areaSelector/travelOff.svg";
import FinanceOn from "../../public/areaSelector/financeOn.svg";
import FinanceOff from "../../public/areaSelector/financeOff.svg";
import LearningOn from "../../public/areaSelector/learningOn.svg";
import LearningOff from "../../public/areaSelector/learningOff.svg";
import FitnessOn from "../../public/areaSelector/fitnessOn.svg";
import FitnessOff from "../../public/areaSelector/fitnessOff.svg";
import CodingOn from "../../public/areaSelector/codingOn.svg";
import CodingOff from "../../public/areaSelector/codingOff.svg";


interface UseCase {
    field: string,
    possibleGoals: string[],
    goal: string,
    situation: string,
    solution: string,
    quote: string,
    imgName: string,
}

// For Area Selector
interface areaItem {
    area: string,
    imageOn: StaticImport,
    imageOff: StaticImport,
}

export const areas: areaItem[] = [
    {
        area: 'Travel',
        imageOn: TravelOn,
        imageOff: TravelOff,
    },
    {
        area: 'Finance',
        imageOn: FinanceOn,
        imageOff: FinanceOff,
    },
    {
        area: 'Learning',
        imageOn: LearningOn,
        imageOff: LearningOff,
    },
    {
        area: 'Fitness',
        imageOn: FitnessOn,
        imageOff: FitnessOff,
    },
    {
        area: 'Coding',
        imageOn: CodingOn,
        imageOff: CodingOff,
    }
];

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

const financeCase: UseCase = {
    field: "Finance",
    possibleGoals: [
        "Save $500 in one month",
        "Create and stick to a weekly budget",
        "Save for a down payment on a house",
        "Reduce monthly expenses by 20%",
        "Sell unused items",
        "Build a better credit score"
    ],
    goal: "Organizing an Investment Portfolio",
    situation: "Taylor had been investing for a few years but felt overwhelmed by the scattered nature of their investments.",
    solution: "OverPlan AI helped Taylor systematically review and organize their portfolio, scheduling time each week to \
        evaluate different types of assets, such as stocks, bonds, and mutual funds, and make informed adjustments.",
    quote: "Thanks to the OverPlan AI, my investment portfolio is now well-organized and optimized. I feel much more \
        confident about my ability to reach my financial goals.",
    imgName: "finance.png"
}

const learningCase: UseCase = {
    field: "Learning",
    possibleGoals: [
        "Learn 50 Italian vocabulary words per week",
        "Learn to play guitar",
        "Study for the SAT Test",
        "Learn fundamentals of UI/UX design",
        "Master cooking basics",
        "Complete a 4-week course on data analytics"
    ],
    goal: "Learn the fundamentals of Chemistry",
    situation: "Hannah is interested in chemistry and wants to learn the basics in a structured manner.",
    solution: "OverPlan AI structured the learning process with weekly modules covering topics like \
        atomic structure, chemical reactions, and periodic trends. This organized approach allowed Hannah \
        to grasp essential principles such as bonding, thermodynamics, and chemical equilibrium.",
    quote: "I went from having little to no knowledge of chemistry to understanding its fundamental concepts, \
        thanks to the structured study plan.",
    imgName: "learning.png"
}

const fitnessCase: UseCase = {
    field: "Fitness",
    possibleGoals: [
        "Walk 10,000 steps per day",
        "Reduce body fat percentage by 2%",
        "Get 7 hours of sleep per night",
        "Improve 100-meter sprint time by 1 second",
        "Lose 10 pounds",
        "Prepare for a 5K marathon"
    ],
    goal: "Run 10 miles per day",
    situation: "Jamie committed to becoming more active through running, aiming to build a routine of running 10 miles per day.",
    solution: "OverPlan AI devised a structured running schedule, incorporating rest days and nutrition advice to support consistent progress.",
    quote: "I've gone from struggling with distance to confidently running 10 miles daily, all thanks to the structured training plan.",
    imgName: "fitness.png"
}

const codingCase: UseCase = {
    field: "Coding",
    possibleGoals: [
        "Learn Python as a beginner",
        "Create a personal website",
        "Build an Express API in a week",
        "Build a Social Media platform",
        "Train a Machine Learning model",
        "Develop a personal AI assistant"
    ],
    goal: "Build an E-Commerce platform",
    situation: "Adam is a skilled developer and wanted to create an e-commerce platform for PC gaming accessories.",
    solution: "OverPlan AI organized the development process, considering frontend design, backend functionality, \
        and database integration. Weekly milestones ensured steady progress in implementing features such as product \
        listings, shopping cart management, and secure payment processing.",
    quote: "I was able to build my E-Commerce website from scratch in a few weeks! Can't wait to deploy it and share it with my friends.",
    imgName: "coding.png"
}

interface IuseCases {
    [k: string]: UseCase,
}

export const useCases: IuseCases = {
    'Travel': travelCase,
    'Finance': financeCase,
    'Learning': learningCase,
    'Fitness': fitnessCase,
    'Coding': codingCase,
}