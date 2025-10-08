// File: `src/app/privacy-policy/content.js`
// Make sure this file exports the object, not just declares it.

export const privacyPolicy = {
    title: "VisuaLit Privacy Policy",
    lastUpdated: "October 8, 2025",
    intro: "This Privacy Policy describes how VisuaLit (\"we,\" \"us,\" or \"our\") collects, uses, and discloses your information when you use the VisuaLit mobile application (the \"Service\").",
    contactEmail: "visualitapp@gmail.com", // Added for easier use

    sections: [
        {
            heading: "1. Data We Collect",
            content: [
                { type: "paragraph", text: "We collect various types of information from and about users of our Service, including:" },
                { type: "subheading", text: "Information You Provide to Us:" },
                {
                    type: "list",
                    items: [
                        "<strong>Account Information:</strong> When you create an account, we collect your Name and Email Address. This information is used to set up and manage your user account, provide personalized features, and communicate with you regarding your account.",
                        "<strong>User-Provided Content (Local):</strong> We allow you to import EPUB files and audiobook files from your device. These files are processed and stored locally on your device for your personal use within the app. We do not collect or transmit these files to our servers or third parties.",
                        "<strong>Purchase History:</strong> If you make in-app purchases (e.g., for premium features or subscriptions), we collect records of these transactions (e.g., item purchased, date of purchase). We do not collect sensitive payment information (like credit card numbers); this is handled securely by Google Play Billing."
                    ]
                },
                { type: "subheading", text: "Information We Collect Automatically (via Firebase Analytics & Crashlytics):" },
                {
                    type: "list",
                    items: [
                        "<strong>User Identifiers:</strong> We collect a User ID (e.g., Firebase User UID) to associate app activity with your account and Device or other IDs (e.g., advertising ID, Firebase installation ID) for analytics and to understand device usage.",
                        "<strong>App Activity:</strong> We collect information about your interactions with the Service, such as App interactions (e.g., taps, scrolls, screen views, time spent in app, reading progress markers), In-app search history, and other actions. This data helps us understand how the app is used and improve its functionality.",
                        "<strong>App Performance Data:</strong> We collect Crash logs and Diagnostics information (e.g., app version, device OS, device model, app launch performance) to identify and fix bugs, monitor app stability, and ensure optimal performance."
                    ]
                },
                { type: "paragraph", text: "We do not collect the following types of data from your device: Precise or Approximate Location, Phone Number, Physical Address, Other User Information (e.g., age, gender), Health Information, Fitness Information, In-App Messages, Emails, SMS, MMS, Photos, Videos, Audio Recordings (from microphone), Calendar information, or Contacts." }
            ]
        },
        {
            heading: "2. How We Use Your Data",
            content: [
                { type: "paragraph", text: "We use the information we collect for the following purposes:" },
                {
                    type: "list",
                    items: [
                        "<strong>App Functionality:</strong> To provide and maintain the Service, manage your account, process your purchases, display your imported/downloaded books, and deliver AI-generated visuals and audio within the app.",
                        "<strong>Account Management:</strong> To manage user registration, login, and preferences.",
                        "<strong>Analytics:</strong> To understand and analyze how you use the Service, track performance, and identify areas for improvement. This helps us optimize app features and content.",
                        "<strong>Personalization:</strong> To tailor your experience within the app, such as remembering your reading progress or suggesting content based on your activity.",
                        "<strong>Developer Communications:</strong> To communicate with you regarding your account, updates, or support inquiries (e.g., password resets).",
                        "<strong>Fraud Prevention, Security, and Compliance:</strong> To detect and prevent fraud, protect the security of our Service, and comply with legal obligations."
                    ]
                }
            ]
        },
        {
            heading: "3. How We Share Your Data",
            content: [
                { type: "paragraph", text: "We share your information with the following third parties for the purposes outlined below:" },
                {
                    type: "list",
                    items: [
                        "<strong>Google Firebase:</strong> We use Google Firebase (including Firebase Authentication, Firebase Analytics, and Firebase Crashlytics) for backend services, user authentication, analytics, and crash reporting. Google processes this data according to its own Privacy Policy (available at <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-400 hover:underline\">https://policies.google.com/privacy</a>).",
                        "<strong>Google Play Billing:</strong> For in-app purchases, transactions are processed directly by Google Play Billing. We receive purchase confirmation but <strong>do not share or process your sensitive payment information</strong> (e.g., credit card numbers)."
                    ]
                },
                { type: "paragraph", text: "We <strong>do not sell your personal information</strong> to any third parties. We will not share your personal information with other third parties unless we have your explicit consent or are required to do so by law." }
            ]
        },
        {
            heading: "4. Data Security",
            content: [
                { type: "paragraph", text: "We implement reasonable security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes:" },
                {
                    type: "list",
                    items: [
                        "<strong>Encryption in Transit:</strong> All user data collected by our app (including communications with Firebase, Google Play Billing, and our backend AI services) is encrypted in transit using Transport Layer Security (TLS).",
                        "<strong>Security Practices:</strong> Data stored on our servers (via Firebase) is protected by Google's industry-standard security protocols. Access to user data is restricted to authorized personnel only."
                    ]
                }
            ]
        },
        {
            heading: "5. Data Retention",
            content: [
                { type: "paragraph", text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. For example, we retain account information for the duration of your account and purchase history for record-keeping. Analytics data is retained according to Google Firebase's data retention policies." }
            ]
        },
        {
            heading: "6. Your Rights",
            content: [
                { type: "paragraph", text: "Depending on your jurisdiction, you may have certain rights regarding your personal data, including:" },
                {
                    type: "list",
                    items: [
                        "<strong>Access:</strong> The right to request access to the personal data we hold about you.",
                        "<strong>Rectification:</strong> The right to request correction of inaccurate personal data.",
                        "<strong>Erasure:</strong> The right to request deletion of your personal data.",
                        "<strong>Objection:</strong> The right to object to the processing of your personal data.",
                        "<strong>Data Portability:</strong> The right to request a copy of your personal data in a structured, commonly used, and machine-readable format."
                    ]
                },
                { type: "paragraph", text: `To exercise any of these rights, please contact us at visualitapp@gmail.com.` }
            ]
        },
        {
            heading: "7. Children's Privacy",
            content: [
                { type: "paragraph", text: "Our Service is not intended for children under the age of <strong>16</strong>. We do not knowingly collect personally identifiable information from children under <strong>16</strong>. If we become aware that we have collected personal data from a child without verification of parental consent, we will take steps to remove that information from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us." },
                { type: "paragraph", text: "<strong>Important Note for VisuaLit:</strong> Since your content rating is 16+, stating the app is not intended for users under 16 aligns with that rating. If you implement a \"Kids Mode\" later and target younger audiences, you will need to significantly update this section (and comply with COPPA)." }
            ]
        },
        {
            heading: "8. Changes to This Privacy Policy",
            content: [
                { type: "paragraph", text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. You are advised to review this Privacy Policy periodically for any changes." }
            ]
        }
    ]
};