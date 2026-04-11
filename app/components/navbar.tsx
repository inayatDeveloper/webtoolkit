import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full bg-gray-900/80 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">

                {/* ICON */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-emerald-500 flex items-center justify-center shadow-lg">

                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* core node system (unique identity) */}
                        <circle cx="12" cy="12" r="2" />

                        <circle cx="5" cy="5" r="1.5" />
                        <circle cx="19" cy="5" r="1.5" />
                        <circle cx="5" cy="19" r="1.5" />
                        <circle cx="19" cy="19" r="1.5" />

                        {/* connections */}
                        <path d="M12 12L5 5" />
                        <path d="M12 12L19 5" />
                        <path d="M12 12L5 19" />
                        <path d="M12 12L19 19" />
                    </svg>

                </div>

                {/* BRAND */}
                <span className="text-white font-bold text-xl tracking-wide">
                    WebToolkit
                </span>

            </Link>

            {/* NAV */}
            <div className="flex items-center gap-6 text-sm text-gray-300">
                <Link href="/" className="hover:text-white transition">
                    All Tools
                </Link>
            </div>
        </nav>
    );
};

export { Navbar };