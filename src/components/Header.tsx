import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row w-full items-center text-center gap-16 py-4 px-8 bg-[#D9D9D9]">
            {/* Logo */}
            <Link href="/">
                <button className="text-2xl font-semibold transition hover:scale-110 duration-300">OverPlan AI</button>
            </Link>
        </div>
    );
}