import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function Header() {
    return (
        <div className="fixed z-20 flex flex-row w-full items-center justify-between text-center gap-16 p-4 bg-white">
            {/* Logo */}
            <div className="relative h-14 w-full max-w-[30vw] lg:max-w-[20vw]">
                <Image
                    src={Logo}
                    layout="fill"
                    objectFit="contain"
                    alt="logo" />
            </div>
            {/* Sign In and Try Now buttons */}
            <div className="flex flex-row gap-8 items-center">
                <a
                    href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}
                    className="transition hover:scale-105 duration-300"
                >
                    <p className="text-black">Sign in</p>
                </a>
                <a
                    href={process.env.NEXT_PUBLIC_APP_URL}
                    className="flex items-center justify-center bg-primary rounded-lg px-4 py-2
                    transition hover:scale-105 duration-300"
                >
                    <p className="text-white">Try Now</p>
                </a>
            </div>
        </div>
    );
}