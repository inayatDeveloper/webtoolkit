import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="w-full bg-gray-900/80 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white">
                🚀 WebToolKit
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 text-sm text-gray-300">
                <Link href="/" className="hover:text-white transition">
                    All Tools
                </Link>
            </div>
        </nav>
    );
}


export { Navbar }