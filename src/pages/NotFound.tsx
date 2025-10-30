import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from 'motion/react'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="max-w-xl flex flex-col mx-4 md:mx-auto mb-12 md:mb-32 p-6 bg-white/30 backdrop-blur-sm shadow-xl shadow-indigo-600/25 inset-shadow-sm inset-shadow-indigo-600/25 rounded-2xl">
                <AnimatePresence mode="wait">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.75 }}
                        whileInView={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 0.3, ease: 'easeIn' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center font-bold text-5xl md:text-9xl mb-4 md:mb-6 "
                    >404
                    </motion.h1>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            bounce: 0.5,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center text-sm md:text-xl mb-2"
                    >
                        Oops! Page Not Found
                    </motion.h2>
                </AnimatePresence>
                <p className="text-center text-xs md:text-md text-gray-600 mb-6">This page you're looking might have been moved, removed, renamed, temporary unavailable or doesn't exist. Let's go back on the track.</p>
                <a
                    onClick={() => navigate('/')}
                    className="cursor-pointer text-xs md:text-md mx-auto px-4 py-2 font-bold text-white bg-cyan-600 rounded-full border border-transparent hover:border-purple-950/20 hover:shadow-md hover:shadow-purple-950/20 transition-all duration-300"
                >
                    Back Home
                </a>
            </div>
        </>
    )
}

export default NotFound