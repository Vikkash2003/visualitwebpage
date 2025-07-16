"use client";

import { useState } from 'react';
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import TargetAudienceSection from '../components/sections/TargetAudienceSection'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PremiumPricing from "../components/sections/PremiumPricing";
import SplashScreen from "@/src/components/sections/SplashScreen";

export default function HomePage() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <>
            {showSplash ? (
                <SplashScreen onFinish={() => setShowSplash(false)} />
            ) : (
                <>
                    <Header />
                    <main className="overflow-hidden">
                        <HeroSection />
                        <FeaturesSection />
                        <TargetAudienceSection />
                        <PremiumPricing />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
}