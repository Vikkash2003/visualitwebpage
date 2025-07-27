import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/common/ThemeContext' // Fix this import

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}