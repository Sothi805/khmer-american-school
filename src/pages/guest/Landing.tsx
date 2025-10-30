import {  useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    useEffect(() => {
        document.title = 'KAS - Landing Page'
    })

    const navigate = useNavigate()

    return (
        <>
            <div className="md:container mx-4 md:mx-auto mb-12 md:mb-32 p-6 md:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-sm shadow-sm shadow-purple-950/25 rounded-2xl">
                <div className="group">
                    <AnimatePresence>
                        <motion.h2
                            initial={{ x: 50, opacity: 1 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut"}}
                            viewport={{ once: true, amount: 0.3 }}
                            className="modak cursor-default text-center text-xl md:text-5xl text-shadow-indigo-600/25 group-hover:text-shadow-sm"
                        >
                            Khmer American School
                        </motion.h2>
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut"}}
                            viewport={{ once: true, amount: 0.3 }}
                            className="modak cursor-default text-center text-3xl md:text-7xl text-shadow-indigo-600/25 group-hover:text-shadow-sm"
                        >
                            Annual Spelling Bee Contest
                        </motion.h1>
                    </AnimatePresence>
                </div>
                <p className="text-center text-xs md:text-base text-gray-600 mt-4 md:mt-8 px-1 md:px-72 text-wrap">Welcome, brilliant spellers! Join us for a celebration of language, learning and friendly competition. Explore the rules and get ready to shine.</p>
                <a onClick={() => navigate("/words-list")} className='mx-auto mt-4 md:mt-8 text-xs md:text-base cursor-pointer px-2 md:px-4 py-1 md:py-2 font-bold text-white bg-cyan-500 rounded-full border border-transparent hover:border-white/20 hover:shadow-md hover:shadow-indigo-600/20 transition-all duration-300'>
                    View Official Words List
                </a>
            </div>
        </>
    )
}

export default Landing