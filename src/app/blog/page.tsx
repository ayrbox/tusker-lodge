import Link from "next/link";
import { Metadata } from "next";
import { attractions, Attraction, AttractionCategory } from "../attractions/data";

export const metadata: Metadata = {
    title: "Travel Blog & Local Attractions | Tusker Lodge Torquay - Discover the English Riviera",
    description: "Explore the best attractions, activities, and hidden gems in Torquay and the English Riviera. Expert travel guides and comprehensive local attractions list from your hosts at Tusker Lodge.",
    keywords: "Torquay blog, English Riviera travel, Torquay attractions, things to do in Torquay, Torquay travel guide, Kents Cavern, Paignton Zoo, Babbacombe",
};

const AttractionCard = (props: Attraction) => {
    return (
        <li className="group py-2">
            <Link
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 group-hover:text-indigo-600 transition-colors"
            >
                {props.name}
            </Link>
            {props.description && (
                <div className="text-sm text-gray-600">{props.description}</div>
            )}
        </li>
    );
};

const renderAttractionCategory = (props: AttractionCategory) => {
    return (
        <div className="bg-white rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {props.name}
            </h3>
            <ul role="list" className="space-y-2">
                {props.attractions.map((a) => (
                    <AttractionCard key={a.name} {...a} />
                ))}
            </ul>
        </div>
    );
};

export default function BlogPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            {/* Page Header */}
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Travel Blog & Local Attractions
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover the best of Torquay and the English Riviera with insider tips from your local hosts at Tusker Lodge
                </p>
            </header>

            {/* Blog Posts Section */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Latest Travel Guides
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                        <Link href="/blog/kents-cavern-guide">
                            <div className="p-6">
                                <time className="text-sm text-blue-500 font-semibold" dateTime="2025-11-23">
                                    November 23, 2025
                                </time>
                                <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-3 hover:text-blue-600 transition-colors">
                                    Exploring Kents Cavern: A Journey Through 400,000 Years of History
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Discover one of Britain's most spectacular prehistoric caves, just minutes from Tusker Lodge. Learn about its fascinating history and why it's a must-visit attraction.
                                </p>
                                <span className="text-blue-500 font-semibold hover:text-blue-700">
                                    Read More →
                                </span>
                            </div>
                        </Link>
                    </article>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-300 my-12"></div>

            {/* Local Attractions Section */}
            <section>
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                        Local Attractions Guide
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore the wonderful attractions near Tusker Lodge. From prehistoric caves to beautiful gardens,
                        the English Riviera has something for everyone.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {attractions.map((category) => (
                        <div key={category.name}>
                            {renderAttractionCategory(category)}
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Explore Torquay?
                </h2>
                <p className="text-lg mb-6 text-blue-50 max-w-2xl mx-auto">
                    Book your stay at Tusker Lodge and experience the best of the English Riviera.
                    We're perfectly located to help you explore all these amazing attractions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm"
                        className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                    >
                        Book Your Stay Now
                    </Link>
                    <Link
                        href="/rooms"
                        className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors inline-block"
                    >
                        View Our Rooms
                    </Link>
                </div>
            </section>
        </div>
    );
}
