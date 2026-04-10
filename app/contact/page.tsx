export const metadata = {
    title: "Contact | WebToolkit",
    description:
        "Contact WebToolkit for support, feedback, or business inquiries.",
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="text-gray-400 text-sm mt-2">
                        We'd love to hear from you
                    </p>
                </div>

                {/* CONTENT */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4">

                    <h2 className="text-lg font-semibold">Email</h2>
                    <p className="text-gray-400 text-sm">
                        support@webtoolkit.store
                    </p>

                    <h2 className="text-lg font-semibold">Support</h2>
                    <p className="text-gray-400 text-sm">
                        Facing issues? Contact us and we’ll respond as soon as possible.
                    </p>

                    <h2 className="text-lg font-semibold">Business</h2>
                    <p className="text-gray-400 text-sm">
                        For partnerships or collaborations, feel free to reach out.
                    </p>

                </div>
            </div>
        </div>
    );
}