import MobileMockup from '../hooks/mobileMockup'
import { Button } from '../ui/Button'
import AnimatedDataFlowHero from "@/src/components/hooks/animatedBackground"

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-black" id={'home'}>
            {/* BACKGROUND ANIMATION */}
            <div className="absolute inset-0 bg-black">
                <AnimatedDataFlowHero/>
            </div>

            {/* OVERLAY FOR BETTER TEXT READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto py-16 px-6">
                {/* LEFT SIDE - TEXT */}
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        <span className="text-green-400 mb-4">Struggle to Visualize While Reading?</span>
                    </h1>
                    <p className="text-lg text-gray-300">
                        Visualit helps you visualize stories while reading — ideal for aphantasia,
                        dyslexia, or anyone who thinks in pictures.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Button> Download Now</Button>
                        <Button variant="outline">▶️ See Demo</Button>
                    </div>
                </div>

                {/* RIGHT SIDE - 3D MOBILE */}
                <MobileMockup />
            </div>
        </section>
    )
}