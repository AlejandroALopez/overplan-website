import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row w-full items-center justify-between text-center gap-16 py-4 px-8 bg-white">
            {/* Logo */}
            <Link href="/">
                <p className="text-3xl font-semibold transition hover:scale-110 duration-300">OverPlan AI</p>
            </Link>
            <div className="flex flex-row gap-8">
                <Link href="/pricing"
                    className="transition hover:scale-110 duration-300 hover:text-primary"
                >
                    Pricing
                </Link>
            </div>
        </div>
    );
}