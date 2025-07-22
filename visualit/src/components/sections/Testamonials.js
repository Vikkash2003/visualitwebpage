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
            className={`absolute h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 ${orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90"} ${className || ""}`}
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
            className={`absolute h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 ${orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"} ${className || ""}`}
            {...props}
        >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
        </button>
    )
})

const defaultTestimonials = [
    { id: 1, name: "Sarah Johnson", role: "Product Manager", company: "TechCorp", content: "This product has completely transformed our workflow.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
    { id: 2, name: "Michael Chen", role: "Software Engineer", company: "StartupXYZ", content: "Outstanding performance and reliability.", avatar: "https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { id: 3, name: "Emily Rodriguez", role: "Design Lead", company: "Creative Agency", content: "The attention to detail is impressive.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
]

export default function TestimonialDemo() {
    const [api, setApi] = useState(null)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (!api) return
        const start = () => {
            intervalRef.current = setInterval(() => {
                if (api.canScrollNext()) api.scrollNext()
                else api.scrollTo(0)
            }, 3000)
        }
        const stop = () => clearInterval(intervalRef.current)
        start()

        const container = api.containerNode()
        if (container) {
            container.addEventListener("mouseenter", stop)
            container.addEventListener("mouseleave", start)
        }
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

                <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {defaultTestimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <motion.div className="h-full">
                                    {/* CHANGED: Background color, border, and hover effect */}
                                    <Card className="h-full border-2 border-transparent bg-muted/50 transition-colors duration-300 hover:border-primary/40">
                                        <div className="p-6 h-full flex flex-col">
                                            {/* REMOVED: The div containing the star rating */}
                                            <div className="relative mb-6 flex-1">
                                                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted-foreground/20" />
                                                {/* CHANGED: Text color for the main content */}
                                                <p className="text-muted-foreground leading-relaxed pl-6">{testimonial.content}</p>
                                            </div>
                                            <div className="flex items-center mt-auto pt-4 border-t border-border/20">
                                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mr-4">
                                                    {testimonial.avatar ? (
                                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-primary font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
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
                            className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            disabled={!api?.canScrollNext()}
                            className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}