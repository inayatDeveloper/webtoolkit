import Link from "next/link";

type Tool = {
    title: string;
    subtitle: string;
    link: string;
};

export default function ToolCard({ title, subtitle, link }: Tool) {
    return (
        <Link
            href={link}
            className="group relative block h-full rounded-2xl p-5 sm:p-6 text-center bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
        >
            {/* top highlight */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            {/* TITLE */}
            <h3 className="text-base sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {title}
            </h3>

            {/* SUBTITLE (FORCED SINGLE LINE) */}
            <p className="text-gray-500 text-xs sm:text-sm truncate whitespace-nowrap overflow-hidden">
                {subtitle}
            </p>
        </Link>
    );
}