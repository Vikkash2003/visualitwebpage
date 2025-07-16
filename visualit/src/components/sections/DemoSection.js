'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUp, X, StopCircle, Mic, Globe, AlertCircle, Paperclip } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};
const WaterWaveBackground = () => {
    return (
        <div className="absolute inset-0 z-0">
            <svg
                className="w-[200%] h-[200px] animate-wave1 absolute bottom-0"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#080808"
                    fillOpacity="0.6"
                    d="M0,160L30,165.3C60,171,120,181,180,160C240,139,300,85,360,101.3C420,117,480,203,540,202.7C600,203,660,117,720,85.3C780,53,840,75,900,96C960,117,1020,139,1080,122.7C1140,107,1200,53,1260,69.3C1320,85,1380,171,1410,213.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
            </svg>

            <svg
                className="w-[200%] h-[200px] animate-wave2 absolute bottom-0"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#141414"
                    fillOpacity="0.5"
                    d="M0,192L30,181.3C60,171,120,149,180,154.7C240,160,300,192,360,213.3C420,235,480,245,540,218.7C600,192,660,128,720,106.7C780,85,840,107,900,138.7C960,171,1020,213,1080,213.3C1140,213,1200,171,1260,144C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
            </svg>
        </div>
    )
}


const styles = `
  *:focus-visible {
    outline-offset: 0 !important;
    --ring-offset: 0 !important;
  }
  textarea::-webkit-scrollbar {
    width: 6px;
  }
  textarea::-webkit-scrollbar-track {
    background: transparent;
  }
    textarea::-webkit-scrollbar-thumb {
    background-color: rgba(34, 197, 94, 0.5);
    border-radius: 3px;
  }
  textarea::-webkit-scrollbar-thumb:hover {
    background-color: rgba(34, 197, 94, 0.7);
  }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
    <textarea
        className={cn(
            "flex w-full rounded-md border-none bg-transparent px-3 py-2.5 text-base text-green-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px] resize-none scrollbar-thin scrollbar-thumb-green-500/50 scrollbar-track-transparent hover:scrollbar-thumb-green-500/70",
            className
        )}
        ref={ref}
        rows={1}
        {...props}
    />
));

Textarea.displayName = "Textarea";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
        default: "bg-green-500 hover:bg-green-600 text-black",
        outline: "border border-green-500/50 bg-transparent hover:bg-green-500/10 text-green-400",
        ghost: "bg-transparent hover:bg-green-500/10 text-green-400",
    };
    const sizeClasses = {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6",
        icon: "h-8 w-8 rounded-full aspect-[1/1]",
    };
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Button.displayName = "Button";

const PromptInputContext = React.createContext(undefined);

function usePromptInput() {
    const context = React.useContext(PromptInputContext);
    if (!context) throw new Error("usePromptInput must be used within a PromptInput");
    return context;
}

const PromptInput = React.forwardRef(({
                                          className,
                                          isLoading = false,
                                          maxHeight = 240,
                                          value,
                                          onValueChange,
                                          onSubmit,
                                          children,
                                          disabled = false,
                                      }, ref) => {
    const [internalValue, setInternalValue] = useState(value || "");
    const handleChange = (newValue) => {
        setInternalValue(newValue);
        onValueChange?.(newValue);
    };
    return (
        <PromptInputContext.Provider
            value={{
                isLoading,
                value: value ?? internalValue,
                setValue: onValueChange ?? handleChange,
                maxHeight,
                onSubmit,
                disabled,
            }}
        >
            <div
                ref={ref}
                className={cn(
                    "rounded-3xl border border-green-500/30 bg-gray-900 p-2 transition-all duration-300",
                    isLoading && "border-green-500/70",
                    className
                )}
            >
                {children}
            </div>
        </PromptInputContext.Provider>
    );
});

PromptInput.displayName = "PromptInput";

const PromptInputTextarea = ({ className, onKeyDown, disableAutosize = false, placeholder, ...props }) => {
    const { value, setValue, maxHeight, onSubmit, disabled } = usePromptInput();
    const textareaRef = useRef(null);

    useEffect(() => {
        if (disableAutosize || !textareaRef.current) return;
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height =
            typeof maxHeight === "number"
                ? `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`
                : `min(${textareaRef.current.scrollHeight}px, ${maxHeight})`;
    }, [value, maxHeight, disableAutosize]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSubmit?.();
        }
        onKeyDown?.(e);
    };

    return (
        <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={cn("text-base", className)}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
        />
    );
};

const PromptInputActions = ({ children, className, ...props }) => (
    <div className={cn("flex items-center gap-2", className)} {...props}>
        {children}
    </div>
);

const CustomDivider = () => (
    <div className="relative h-6 w-[1.5px] mx-1">
        <div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-green-500/70 to-transparent rounded-full"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 140% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, -40% 50%, 0% 40%)",
            }}
        />
    </div>
);

const PromptInputBox = React.forwardRef((props, ref) => {
    const { onSend = () => {}, isLoading = false, placeholder = "Type your message here...", className } = props;
    const [input, setInput] = useState("");

    const promptBoxRef = useRef(null);

    const handleSubmit = () => {
        if (input.trim() !== "") {
            onSend(input);
            setInput("");
        }
    };

    const hasContent = input.trim() !== "";

    return (
        <>
            <PromptInput
                value={input}
                onValueChange={setInput}
                isLoading={isLoading}
                onSubmit={handleSubmit}
                className={cn(
                    "w-full transition-all duration-300 ease-in-out",
                    className
                )}
                disabled={isLoading}
                ref={ref || promptBoxRef}
            >
                <div
                    className={cn(
                        "transition-all duration-300"
                    )}
                >
                    <PromptInputTextarea
                        placeholder={placeholder}
                        className="text-base"
                    />
                </div>

                <PromptInputActions className="flex items-center justify-between gap-2 p-0 pt-2">
                    <div
                        className={cn(
                            "flex items-center gap-1 transition-opacity duration-300"
                        )}
                    >
                        {/* No actions here as per user request */}
                    </div>

                    <button
                        className="flex h-8 w-8 text-green-400/70 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-green-500/10 hover:text-green-400"
                    >
                        <Paperclip className="h-4 w-4 transition-colors" />
                    </button>
                </PromptInputActions>
            </PromptInput>
        </>
    );
});

PromptInputBox.displayName = "PromptInputBox";

const AlertNotification = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-4 right-4 z-50 bg-black/90 border border-green-500/50 rounded-lg p-4 shadow-lg max-w-sm"
        >
            <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <p className="text-green-100 text-sm">{message}</p>
                <button
                    onClick={onClose}
                    className="ml-auto text-green-400 hover:text-green-300 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
    );
};

const Demo = () => {
    const [inputValue, setInputValue] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSendMessage = (message) => {
        console.log('Message:', message);
        setInputValue(message);
    };

    const showAlertNotification = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
    };

    const handleVisualize = () => {
        if (!inputValue.trim()) {
            showAlertNotification("Please enter some text before visualizing.");
            return;
        }
        console.log("Visualizing:", inputValue);
    };

    const handleAudioBook = () => {
        if (!inputValue.trim()) {
            showAlertNotification("Please enter some text before creating an audiobook.");
            return;
        }
        console.log("Creating AudioBook:", inputValue);
    };

    return (
        <div className="flex w-full min-h-screen justify-center items-center relative z-10">
            <div className="w-full max-w-4xl p-8 space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-400 mb-2">Try Demo</h1>
                    <p className="text-gray-400 text-lg mb-8">
                        Experience Visualit smart reader, audiobook feature, and built-in AI dictionary — instantly
                        and without any installation
                    </p>
                </div>

                <div className="bg-black/40 rounded-xl p-6 backdrop-blur-sm border border-green-500/10">
                    <div className="w-full max-w-2xl mx-auto">
                        <PromptInputBox onSend={handleSendMessage} />
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                            onClick={handleVisualize}
                        >
                            <Globe className="h-4 w-4"/>
                            Visualize
                        </button>
                        <button
                            className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                            onClick={handleAudioBook}
                        >
                            <Mic className="h-4 w-4"/>
                            AudioBook
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                <AlertNotification
                    message={alertMessage}
                    isVisible={showAlert}
                    onClose={() => setShowAlert(false)}
                />
            </AnimatePresence>
        </div>
    );
};

export default function DemoSection() {
    return (
        <div className="relative min-h-screen bg-[#080808]">

            <Demo />
        </div>
    )
}