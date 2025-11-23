import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel Blog | Tusker Lodge Torquay - Discover the English Riviera",
    description: "Explore the best attractions, activities, and hidden gems in Torquay and the English Riviera. Expert travel guides from your local hosts at Tusker Lodge.",
    keywords: "Torquay blog, English Riviera travel, Torquay attractions, things to do in Torquay, Torquay travel guide",
};

export default function BlogPage() {
    return (
        <div className="container mx-auto py-12">
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Tusker Lodge Travel Blog
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the best of Torquay and the English Riviera with insider tips from your local hosts
                </p>
            </header>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <Link href="/blog/kents-cavern-guide">
                        <div className="p-6">
                            <time className="text-sm text-blue-500 font-semibold" dateTime="2025-11-23">
                                November 23, 2025
                            </time>
                            <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-3 hover:text-blue-600 transition-colors">
                                Exploring Kents Cavern: A Journey Through 400,000 Years of History
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Discover one of Britain's most spectacular prehistoric caves, just minutes from Tusker Lodge. Learn about its fascinating history and why it's a must-visit attraction.
                            </p>
                            <span className="text-blue-500 font-semibold hover:text-blue-700">
                                Read More →
                            </span>
                        </div>
                    </Link>
                </article>
            </section>
        </div>
    );
}
