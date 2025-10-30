import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import Logo from "../assets/logo.png"

const GuestHeader = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { label: "Words List", path: "/words-list" },
        { label: "Rulebook", path: "/rulebook" },
        { label: "Guest Guidelines", path: "/guest-guidelines" },
    ]

    return (
        <>
            <div className="sticky top-0 z-50">
                <nav className="md:container md:mx-auto flex justify-between items-center px-4 py-1 mb-12 md:px-6 md:py-4 md:mb-24 rounded-none md:rounded-b-2xl bg-white/10 backdrop-blur-sm shadow-sm shadow-purple-950/25">
                    {/* Logo */}
                    <a
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <img className="w-8 md:w-12" src={Logo} alt="school logo" />
                        <h1 className="font-bold text-sm md:text-xl">
                            Khmer American School
                        </h1>
                    </a>

                    {/* Hamburger */}
                    <button
                        className="material-symbols-outlined text-3xl opacity-100 md:opacity-0"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "close" : "menu"}
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map(({ label, path }) => (
                            <a
                                key={path}
                                onClick={() => navigate(path)}
                                className="cursor-pointer text-gray-600 hover:text-black hover:underline transition-all duration-300"
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            onClick={() => navigate("/learn-more")}
                            className="cursor-pointer px-4 py-2 font-bold text-white bg-cyan-500 rounded-full border border-transparent hover:border-white/20 hover:shadow-md hover:shadow-indigo-600/20 transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </nav>

                {/* Mobile dropdown */}
                <AnimatePresence mode="wait">
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-sm shadow-md rounded-b-xl p-6 flex flex-col space-y-4 md:hidden z-40"
                        >
                            {navLinks.map(({ label, path }) => (
                                <a
                                    key={path}
                                    onClick={() => {
                                        setMenuOpen(false)
                                        navigate(path)
                                    }}
                                    className="cursor-pointer text-xs text-gray-700 hover:text-black transition-all duration-300"
                                >
                                    {label}
                                </a>
                            ))}
                            <a
                                onClick={() => {
                                    setMenuOpen(false)
                                    navigate("/learn-more")
                                }}
                                className="cursor-pointer text-xs px-4 py-2 font-bold text-center text-white bg-cyan-500/75 backdrop-blur-sm rounded border border-transparent hover:border-white/20 hover:shadow-md hover:shadow-indigo-600/20 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </>
    )
}

export default GuestHeader
