import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed z-20 flex flex-row w-full items-center justify-between text-center gap-16 py-3 px-6 bg-white">
            {/* Logo */}
            <div>
                <p className="text-2xl text-black md:text-3xl font-semibold">OverPlan AI</p>
            </div>
            {/* Sign In and Try Now buttons */}
            <div className="flex flex-row gap-8 items-center">
                <button
                    className="transition hover:scale-105 duration-300"
                >
                    <p className="text-black">Sign in</p>
                </button>
                <button
                    className="flex items-center justify-center bg-primary rounded-lg px-4 py-2
                    transition hover:scale-105 duration-300"
                >
                    <p className="text-white">Try Now</p>
                </button>
            </div>
        </div>
    );
}