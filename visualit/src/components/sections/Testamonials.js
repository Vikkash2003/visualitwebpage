"use client"

import React, { useState, useEffect, useRef, useCallback, useContext, createContext } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { motion } from "framer-motion"
import Card from "@/src/components/ui/Card";

const CarouselContext = createContext(null)

function useCarousel() {
    const context = useContext(CarouselContext)
    if (!context) throw new Error("useCarousel must be used within a <Carousel />")
    return context
}

const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === "horizontal" ? "x" : "y" }, plugins)
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback((api) => {
        if (!api) return
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = useCallback(() => api?.scrollNext(), [api])

    const handleKeyDown = useCallback((event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault()
            scrollPrev()
        } else if (event.key === "ArrowRight") {
            event.preventDefault()
            scrollNext()
        }
    }, [scrollPrev, scrollNext])

    useEffect(() => {
        if (api && setApi) setApi(api)
    }, [api, setApi])

    useEffect(() => {
        if (!api) return
        onSelect(api)
        api.on("reInit", onSelect)
        api.on("select", onSelect)
        return () => api.off("select", onSelect)
    }, [api, onSelect])

    return (
        <CarouselContext.Provider value={{ carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
            <div ref={ref} onKeyDownCapture={handleKeyDown} className={`relative ${className || ""}`} role="region" aria-roledescription="carousel" {...props}>
                {children}
            </div>
        </CarouselContext.Provider>
    )
})

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()
    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div ref={ref} className={`flex ${orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"} ${className || ""}`} {...props} />
        </div>
    )
})

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useCarousel()
    return (
        <div ref={ref} role="group" aria-roledescription="slide" className={`min-w-0 shrink-0 grow-0 basis-full ${orientation === "horizontal" ? "pl-4" : "pt-4"} ${className || ""}`} {...props} />
    )
})

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()
    return (
        <button
            ref={ref}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50 ${orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90"} ${className || ""}`}
            {...props}
        >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
        </button>
    )
})

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()
    return (
        <button
            ref={ref}
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50 ${orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"} ${className || ""}`}
            {...props}
        >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
        </button>
    )
})

// --- NEW: TestimonialCard component with "Read More" functionality ---
const TestimonialCard = ({ testimonial }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const TRUNCATE_LIMIT = 150;
    const isTruncatable = testimonial.content.length > TRUNCATE_LIMIT;

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const displayText = isExpanded || !isTruncatable
        ? testimonial.content
        : `${testimonial.content.substring(0, TRUNCATE_LIMIT)}...`;

    return (
        <Card className="h-full border-2 border-transparent bg-muted/50 transition-colors duration-300 hover:border-primary/40">
            <div className="p-6 h-full flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar and user info */}
                <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0 w-full sm:w-auto sm:min-w-[100px]">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex-shrink-0">
                        {testimonial.avatar ? (
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="w-full h-full flex items-center justify-center text-primary font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                        )}
                    </div>
                    <div className="sm:mt-2 text-left sm:text-center">
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                </div>

                {/* Testimonial content */}
                <div className="flex-1 relative border-t-2 sm:border-t-0 sm:border-l-2 border-border/20 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                    <Quote className="absolute -top-1 left-0 sm:top-0 sm:-left-4 h-8 w-8 text-muted-foreground/20" />
                    <p className="text-muted-foreground leading-relaxed text-sm">
                        {displayText}
                        {isTruncatable && (
                            <button onClick={toggleExpanded} className="text-primary font-semibold ml-2 hover:underline">
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                    </p>
                </div>
            </div>
        </Card>
    );
};


const defaultTestimonials = [
    { id: 1, name: "Yohan Liyanage", role: "CEO of Altrium", company: "Altrium", content: "It was truly inspiring to see the incredible work your team has done. I especially loved how you’ve creatively used technology - voice models and AI-generated visuals - to reimagine how stories can be experienced. In a time when digital distractions are pulling people away from reading, it’s refreshing to see an innovation that brings books back to life in such an engaging, accessible way. Keep pushing boundaries!", avatar: "/testimonial_1.jpg" },
    { id: 2, name: "Jane Doe", role: "Lead Developer, Innovate Inc.", company: "Innovate Inc.", content: "An absolutely essential tool for our team. The performance is top-notch and the user interface is incredibly intuitive. It has streamlined our processes and saved us countless hours of work. We couldn't be happier with the results.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
];

export default function TestimonialDemo() {
    const [api, setApi] = useState(null)
    const intervalRef = useRef(null)

    // Autoplay logic
    useEffect(() => {
        if (!api) return
        const start = () => {
            intervalRef.current = setInterval(() => {
                if (api.canScrollNext()) api.scrollNext()
                else api.scrollTo(0)
            }, 5000) // Increased interval for better readability
        }
        const stop = () => clearInterval(intervalRef.current)

        api.on("pointerDown", stop);
        api.on("select", () => {
            stop();
            start();
        });

        const container = api.containerNode()
        if (container) {
            container.addEventListener("mouseenter", stop)
            container.addEventListener("mouseleave", start)
        }

        start()

        return () => {
            stop()
            if (container) {
                container.removeEventListener("mouseenter", stop)
                container.removeEventListener("mouseleave", start)
            }
        }
    }, [api])


    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Industry Experts</motion.h2>
                    <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto">We're proud to be the choice of leading professionals. Discover why experts in the field trust our platform to drive innovation and deliver results.</motion.p>
                </div>

                <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
                    <CarouselContent className="-ml-4">
                        {defaultTestimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-4 md:basis-full">
                                <motion.div className="h-full">
                                    {/* --- CHANGED: Using the new TestimonialCard component --- */}
                                    <TestimonialCard testimonial={testimonial} />
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>

                <div className="flex justify-center mt-8 md:hidden">
                    <div className="flex space-x-2">
                        <button
                            onClick={() => api?.scrollPrev()}
                            disabled={!api?.canScrollPrev()}
                            className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            disabled={!api?.canScrollNext()}
                            className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}