
// visualit/src/components/layout/Footer.js
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import * as LabelPrimitive from "@radix-ui/react-label"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
// Added X for the alert close button
import { Facebook, Instagram, Linkedin, Send, X, AlertCircle, CheckCircle2 } from "lucide-react"
import { Client, Databases, ID } from "appwrite"

function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}

// --- Reusable AlertBox Component ---
const AlertBox = ({ message, type = 'success', onClose }) => {
    const isSuccess = type === 'success';

    const baseClasses = "fixed top-5 right-5 z-[100] flex items-center p-4 mb-4 max-w-md w-full rounded-lg shadow-lg animate-in fade-in-0 slide-in-from-right-5";
    const typeClasses = isSuccess
        ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
        : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";

    const Icon = isSuccess ? CheckCircle2 : AlertCircle;

    return (
        <div className={cn(baseClasses, typeClasses)} role="alert">
            <Icon className="h-5 w-5 mr-3" />
            <div className="text-sm font-medium">{message}</div>
            <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
                onClick={onClose}
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <X className="h-5 w-5" />
            </button>
        </div>
    );
};
AlertBox.displayName = "AlertBox";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    },
)
Button.displayName = "Button"

const Input = React.forwardRef(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

const labelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
    />
))
Label.displayName = LabelPrimitive.Root.displayName

const Switch = React.forwardRef(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
            className,
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
            )}
        />
    </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

const Textarea = React.forwardRef(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
            "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
        )}
        {...props}
    />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName


function FooterSection() {
    const [highlight, setHighlight] = React.useState(false)
    const emailFormRef = React.useRef(null)
    const [email, setEmail] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    // New state for managing alerts
    const [alert, setAlert] = React.useState({
        show: false,
        message: '',
        type: 'success', // 'success' or 'error'
    });


    // Initialize Appwrite client and databases using env variables
    const client = React.useMemo(
        () =>
            new Client()
                .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
                .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        []
    )
    const databases = React.useMemo(() => new Databases(client), [client])

    React.useEffect(() => {
        window.highlightFooterEmail = () => {
            setHighlight(true)
            setTimeout(() => setHighlight(false), 1500)
        }
    }, [])

    // Effect to auto-dismiss the alert after 5 seconds
    React.useEffect(() => {
        if (alert.show) {
            const timer = setTimeout(() => {
                setAlert((prev) => ({ ...prev, show: false }));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [alert.show]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- VALIDATION ---
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setAlert({ show: true, message: 'Email address cannot be empty.', type: 'error' });
            return;
        }
        if (!emailRegex.test(email)) {
            setAlert({ show: true, message: 'Please enter a valid email address.', type: 'error' });
            return;
        }

        setLoading(true);
        try {
            await databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
                ID.unique(),
                {
                    email: email,
                }
            );
            setEmail("");
            setAlert({ show: true, message: 'Thank you for subscribing!', type: 'success' });
        } catch (error) {
            console.error(error);
            // Handle specific Appwrite error for duplicate entries (409 Conflict)
            if (error.code === 409) {
                setAlert({ show: true, message: 'This email is already subscribed.', type: 'error' });
            } else {
                setAlert({ show: true, message: 'An unexpected error occurred. Please try again.', type: 'error' });
            }
        }
        setLoading(false);
    }

    const SocialButton = React.memo(({ icon: Icon, label, tooltip }) => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{label}</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ))
    SocialButton.displayName = "SocialButton"

    return (
        <React.Fragment>
            {/* Render the alert box if show is true */}
            {alert.show && (
                <AlertBox
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert({ ...alert, show: false })}
                />
            )}

            <footer id="footer" className="relative border-t bg-background text-foreground transition-colors duration-300">
                <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        <div className="relative">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
                            <p className="mb-6 text-muted-foreground">
                                Join our newsletter for the latest updates and exclusive offers.
                            </p>
                            <form
                                ref={emailFormRef}
                                onSubmit={handleSubmit}
                                className={`relative transition-shadow ${highlight ? "ring-4 ring-[#0CF2A0] ring-opacity-60" : ""}`}>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="pr-12 backdrop-blur-sm"
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                                    disabled={loading}
                                >
                                    <Send className="h-4 w-4"/>
                                    <span className="sr-only">Subscribe</span>
                                </Button>
                            </form>
                            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl"/>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                            <nav className="space-y-2 text-sm">
                                <a href="#home"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       document.querySelector('#home').scrollIntoView({behavior: 'smooth'});
                                   }}
                                   className="block transition-colors hover:text-primary"
                                >
                                    Home
                                </a>
                                <a href="#features"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
                                   }}
                                   className="block transition-colors hover:text-primary"
                                >
                                    Features
                                </a>
                                <a href="#pricing"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
                                   }}
                                   className="block transition-colors hover:text-primary"
                                >
                                    Pricing
                                </a>
                                <a href="#footer"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
                                   }}
                                   className="block transition-colors hover:text-primary"
                                >
                                    Contact
                                </a>
                            </nav>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                            <address className="space-y-2 text-sm not-italic">
                                <p>Email: visualit@gmail.com</p>
                            </address>
                        </div>
                        <div className="relative">
                            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                            <div className="mb-6 flex space-x-4">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="icon" className="rounded-full">
                                                <Facebook className="h-4 w-4" />
                                                <span className="sr-only">Facebook</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Follow us on Facebook</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="icon" className="rounded-full">
                                                <Instagram className="h-4 w-4" />
                                                <span className="sr-only">Instagram</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Follow us on Instagram</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <a href="https://www.linkedin.com/company/visualit-app/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="icon" className="rounded-full">
                                                    <Linkedin className="h-4 w-4" />
                                                    <span className="sr-only">LinkedIn</span>
                                                </Button>
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Connect with us on LinkedIn</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                        <p className="text-sm text-muted-foreground">
                            © 2024 Your Company. All rights reserved.
                        </p>
                        <nav className="flex gap-4 text-sm">
                            <a href="#" className="transition-colors hover:text-primary">
                                Privacy Policy
                            </a>
                            <a href="#" className="transition-colors hover:text-primary">
                                Terms of Service
                            </a>
                            <a href="#" className="transition-colors hover:text-primary">
                                Cookie Settings
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
FooterSection.displayName = "FooterSection"

export default React.memo(FooterSection)
