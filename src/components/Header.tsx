import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed z-20 flex flex-row w-full items-center justify-between text-center gap-16 py-3 px-4 bg-white">
            {/* Logo */}
            <Link href="/">
                <p className="text-2xl md:text-3xl font-semibold transition hover:scale-110 duration-300">OverPlan AI</p>
            </Link>
        </div>
    );
}