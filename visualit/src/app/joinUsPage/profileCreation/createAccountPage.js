// "use client";
//
// import React, { useState, forwardRef } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff, User, Mail, Lock, UserCheck } from "lucide-react";
//
// // Utility function for class names
// const cn = (...classes) => {
//     return classes.filter(Boolean).join(" ");
// };
//
// // Input Component
// const Input = forwardRef(({ className, type, ...props }, ref) => {
//     return (
//         <input
//             type={type}
//             className={cn(
//                 "flex h-12 w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white shadow-sm transition-all placeholder:text-zinc-400 focus-visible:border-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/20 disabled:cursor-not-allowed disabled:opacity-50",
//                 className,
//             )}
//             ref={ref}
//             {...props}
//         />
//     );
// });
// Input.displayName = "Input";
//
// // Label Component
// const Label = forwardRef(({ className, ...props }, ref) => (
//     <label
//         ref={ref}
//         className={cn(
//             "text-sm font-medium text-zinc-200 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
//             className
//         )}
//         {...props}
//     />
// ));
// Label.displayName = "Label";
//
// // Button Component
// const Button = forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
//     const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/20 disabled:pointer-events-none disabled:opacity-50";
//
//     const variants = {
//         default: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/25",
//         outline: "border border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:text-white"
//     };
//
//     const sizes = {
//         default: "h-12 px-6 py-3",
//         sm: "h-9 px-3",
//         lg: "h-14 px-8"
//     };
//
//     return (
//         <motion.button
//             whileTap={{ scale: 0.98 }}
//             className={cn(baseClasses, variants[variant], sizes[size], className)}
//             ref={ref}
//             {...props}
//         />
//     );
// });
// Button.displayName = "Button";
//
// // Card Components
// const Card = forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn(
//             "rounded-xl border border-zinc-800 bg-black/50 backdrop-blur-sm text-white shadow-2xl",
//             className,
//         )}
//         {...props}
//     />
// ));
// Card.displayName = "Card";
//
// // CardHeader
// const CardHeader = forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn("flex flex-col space-y-2 p-4 pb-2", className)}
//         {...props}
//     />
// ));
// CardHeader.displayName = "CardHeader";
//
// const CardTitle = forwardRef(({ className, ...props }, ref) => (
//     <h1
//         ref={ref}
//         className={cn(
//             "text-3xl font-bold leading-tight tracking-tight text-white",
//             className,
//         )}
//         {...props}
//     />
// ));
// CardTitle.displayName = "CardTitle";
//
// const CardDescription = forwardRef(({ className, ...props }, ref) => (
//     <p
//         ref={ref}
//         className={cn("text-zinc-400 text-base", className)}
//         {...props}
//     />
// ));
// CardDescription.displayName = "CardDescription";
//
// // CardContent
// const CardContent = forwardRef(({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("p-4 pt-2", className)} {...props} />
// ));
//
// CardContent.displayName = "CardContent";
//
// // Main Component
// function CreateAccountPage() {
//     const [formData, setFormData] = useState({
//         name: "",
//         username: "",
//         email: "",
//         password: ""
//     });
//
//     const [errors, setErrors] = useState({
//         name: "",
//         username: "",
//         email: "",
//         password: ""
//     });
//
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//
//     const validateField = (name, value) => {
//         let error = "";
//
//         switch (name) {
//             case "name":
//                 if (!value.trim()) {
//                     error = "Name is required";
//                 } else if (value.trim().length < 2) {
//                     error = "Name must be at least 2 characters";
//                 }
//                 break;
//             case "username":
//                 if (!value.trim()) {
//                     error = "Username is required";
//                 } else if (value.length < 3) {
//                     error = "Username must be at least 3 characters";
//                 } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
//                     error = "Username can only contain letters, numbers, and underscores";
//                 }
//                 break;
//             case "email":
//                 if (!value.trim()) {
//                     error = "Email is required";
//                 } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//                     error = "Please enter a valid email address";
//                 }
//                 break;
//             case "password":
//                 if (!value) {
//                     error = "Password is required";
//                 } else if (value.length < 8) {
//                     error = "Password must be at least 8 characters";
//                 } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
//                     error = "Password must contain uppercase, lowercase, and number";
//                 }
//                 break;
//         }
//
//         return error;
//     };
//
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: "" }));
//         }
//     };
//
//     const handleBlur = (e) => {
//         const { name, value } = e.target;
//         const error = validateField(name, value);
//         setErrors(prev => ({ ...prev, [name]: error }));
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         const newErrors = {
//             name: validateField("name", formData.name),
//             username: validateField("username", formData.username),
//             email: validateField("email", formData.email),
//             password: validateField("password", formData.password)
//         };
//
//         setErrors(newErrors);
//
//         const hasErrors = Object.values(newErrors).some(error => error !== "");
//
//         if (!hasErrors) {
//             setIsLoading(true);
//             setTimeout(() => {
//                 setIsLoading(false);
//                 alert("Account created successfully!");
//             }, 2000);
//         }
//     };
//
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-4">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
//
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full max-w-md relative z-10"
//             >
//                 <Card className="border-zinc-800/50 shadow-2xl shadow-green-500/10">
//                     <CardHeader className="text-center">
//                         <motion.div
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                             className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center"
//                         >
//                             <UserCheck className="w-8 h-8 text-white" />
//                         </motion.div>
//                         <CardTitle className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
//                             Create Account
//                         </CardTitle>
//                         <CardDescription>
//                             Join us today and start your journey
//                         </CardDescription>
//                     </CardHeader>
//
//                     <CardContent>
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             {/* Name Field */}
//                             <div className="space-y-2">
//                                 <Label htmlFor="name" className="flex items-center gap-2">
//                                     <User className="w-4 h-4 text-green-500" />
//                                     Full Name
//                                 </Label>
//                                 <Input
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     placeholder="Enter your full name"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     onBlur={handleBlur}
//                                     className={errors.name ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""}
//                                 />
//                                 {errors.name && (
//                                     <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">
//                                         {errors.name}
//                                     </motion.p>
//                                 )}
//                             </div>
//
//                             {/* Username Field */}
//                             <div className="space-y-2">
//                                 <Label htmlFor="username" className="flex items-center gap-2">
//                                     <UserCheck className="w-4 h-4 text-green-500" />
//                                     Username
//                                 </Label>
//                                 <Input
//                                     id="username"
//                                     name="username"
//                                     type="text"
//                                     placeholder="Choose a username"
//                                     value={formData.username}
//                                     onChange={handleInputChange}
//                                     onBlur={handleBlur}
//                                     className={errors.username ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""}
//                                 />
//                                 {errors.username && (
//                                     <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">
//                                         {errors.username}
//                                     </motion.p>
//                                 )}
//                             </div>
//
//                             {/* Email Field */}
//                             <div className="space-y-2">
//                                 <Label htmlFor="email" className="flex items-center gap-2">
//                                     <Mail className="w-4 h-4 text-green-500" />
//                                     Email Address
//                                 </Label>
//                                 <Input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     onBlur={handleBlur}
//                                     className={errors.email ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""}
//                                 />
//                                 {errors.email && (
//                                     <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">
//                                         {errors.email}
//                                     </motion.p>
//                                 )}
//                             </div>
//
//                             {/* Password Field */}
//                             <div className="space-y-2">
//                                 <Label htmlFor="password" className="flex items-center gap-2">
//                                     <Lock className="w-4 h-4 text-green-500" />
//                                     Password
//                                 </Label>
//                                 <div className="relative">
//                                     <Input
//                                         id="password"
//                                         name="password"
//                                         type={showPassword ? "text" : "password"}
//                                         placeholder="Create a strong password"
//                                         value={formData.password}
//                                         onChange={handleInputChange}
//                                         onBlur={handleBlur}
//                                         className={cn(
//                                             "pr-12",
//                                             errors.password ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""
//                                         )}
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
//                                     >
//                                         {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                                     </button>
//                                 </div>
//                                 {errors.password && (
//                                     <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">
//                                         {errors.password}
//                                     </motion.p>
//                                 )}
//                             </div>
//
//                             {/* Submit Button */}
//                             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                                 <Button
//                                     type="submit"
//                                     className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
//                                     disabled={isLoading}
//                                 >
//                                     {isLoading ? (
//                                         <div className="flex items-center gap-2">
//                                             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                                             Creating Account...
//                                         </div>
//                                     ) : (
//                                         "Create Account"
//                                     )}
//                                 </Button>
//                             </motion.div>
//
//                             {/* Sign In Link */}
//                             <div className="text-center">
//                                 <p className="text-zinc-400">
//                                     Already have an account?{" "}
//                                     <button
//                                         type="button"
//                                         className="text-green-500 hover:text-green-400 font-medium transition-colors"
//                                     >
//                                         Sign in
//                                     </button>
//                                 </p>
//                             </div>
//                         </form>
//                     </CardContent>
//                 </Card>
//             </motion.div>
//         </div>
//     );
// }
//
// export default CreateAccountPage;
