// File: `src/app/privacy-policy/page.jsx`
import React from "react";
import { privacyPolicy } from "./content";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <main className="container mx-auto px-4 py-12 pt-16"> {/* Adjusted padding-top */}
                <div className="prose prose-invert max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        {privacyPolicy.title}
                    </h1>
                    <p className="mb-8 text-gray-400">
                        Last Updated: {privacyPolicy.lastUpdated}
                    </p>

                    <p className="mb-8 text-gray-300">{privacyPolicy.intro}</p>

                    {privacyPolicy.sections.map((section, idx) => (
                        <div key={idx} className="mb-10">
                            <h2 className="text-3xl font-semibold mt-8 mb-4 text-white">
                                {section.heading}
                            </h2>
                            {section.content.map((block, bIdx) => {
                                if (block.type === "paragraph") {
                                    return (
                                        <p
                                            key={bIdx}
                                            className="mb-4 text-gray-300 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: block.text }}
                                        />
                                    );
                                } else if (block.type === "subheading") {
                                    return (
                                        <h3 key={bIdx} className="text-2xl font-semibold mt-6 mb-3 text-white">
                                            {block.text}
                                        </h3>
                                    );
                                } else if (block.type === "list") {
                                    return (
                                        <ul key={bIdx} className="list-disc list-inside ml-5 mb-4 text-gray-300 space-y-2">
                                            {block.items.map((item, iIdx) => (
                                                <li key={iIdx} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                    );
                                } else if (block.type === "html") {
                                    // For content that needs raw HTML (e.g., links with specific text)
                                    return <div key={bIdx} dangerouslySetInnerHTML={{ __html: block.html }} />;
                                }
                                return null;
                            })}
                        </div>
                    ))}

                    <div className="mt-12 text-gray-400">
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:{" "}
                            <a
                                href={`mailto:${privacyPolicy.contactEmail}`}
                                className="text-blue-400 hover:underline"
                            >
                                {privacyPolicy.contactEmail}
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}