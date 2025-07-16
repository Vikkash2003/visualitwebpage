"use client";
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
    const messages = ["Can't Imagine?", "Feel the Words.", "Stories... Come Alive."];
    const [currentMessage, setCurrentMessage] = useState(0);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timers = [];

        messages.forEach((_, index) => {
            timers.push(setTimeout(() => setCurrentMessage(index), index * 2000));
        });

        // Show logo after all messages
        timers.push(setTimeout(() => setShowLogo(true), messages.length * 2000));

        // Finish splash screen after everything
        timers.push(setTimeout(() => onFinish(), messages.length * 2000 + 2000));

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center flex-col text-white font-bold text-3xl md:text-5xl overflow-hidden">
            {!showLogo ? (
                <div className="transition-opacity duration-1000 ease-in-out animate-fadeIn">
                    {messages[currentMessage]}
                </div>
            ) : (
                <div className="transition-all duration-1000 ease-in-out transform scale-0 animate-zoomIn text-6xl tracking-wider text-purple-400">
                    Visualit
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
