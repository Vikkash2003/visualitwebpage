'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MobileMockup() {
    return (
        <motion.div
            className="relative w-[250px] h-[500px] mx-auto md:ml-auto md:mr-10 pt-14"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut'
            }}
        >
            <div className="w-full h-full transform shadow-2xl rounded-[2rem] overflow-hidden border-[6px] border-black">
                <Image
                    src="/harry.jpg"
                    alt="Visualit App"
                    fill
                    className="object-cover"
                />
            </div>
        </motion.div>
    )
}