import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-row flex-wrap gap-2 w-full justify-between items-center p-12 bg-black">
            {/* All rights reserved */}
            <div>
                <p className="text-white text-lg">© 2024 OverPlan AI. All rights reserved.</p>
            </div>
            {/* Legal links */}
            <div>
                <a
                    className="text-white hover:underline"
                    href="/documents/privacy.pdf" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                </a>
            </div>
        </div>
    );
}