"use client"
import { motion, AnimatePresence } from "motion/react"

type ScheduleItem = {
    title: string
    time: string
    color: string
    duration: number
}

type ConductItem = {
    icon: string
    text: string
    color: string
    duration: number
}

type RuleItem = {
    icon: string
    text: string
    color: string
    duration: number
}

const schedule: ScheduleItem[] = [
    { title: "Welcoming guests and seating of participants & officials", time: "03:30 - 04:00 PM", color: "yellow", duration: 0.5 },
    { title: "Opening Ceremony (Welcome remarks; introduction of guests)", time: "04:00 - 04:10 PM", color: "yellow", duration: 0.6 },
    { title: "Story-telling in Chinese by the School’s Chinese Language Class", time: "04:10 - 04:30 PM", color: "green", duration: 0.7 },
    { title: "Match 1 - Entry Level (Easy → Medium)", time: "04:30 - 05:00 PM", color: "red", duration: 0.8 },
    { title: "Break - backstage/organisational preparation", time: "05:00 - 05:10 PM", color: "yellow", duration: 0.9 },
    { title: "Match 2 - Medium Level (Medium → Hard as appropriate)", time: "05:10 - 05:50 PM", color: "red", duration: 1 },
    { title: "Break - backstage/organisational preparation", time: "05:50 - 06:00 PM", color: "yellow", duration: 1.1 },
    { title: "Match 3 - Main Show (Hard → Very Hard — upper classes)", time: "06:00 - 07:00 PM", color: "red", duration: 1.2 },
    { title: "Break - to prepare for awarding ceremony", time: "07:00 - 07:15 PM", color: "yellow", duration: 1.3 },
    { title: "Speech by the School Owner/Director to encourage all students and contestants.", time: "07:15 - 07:30 PM", color: "green", duration: 1.4 },
    { title: "Awarding Ceremony & Closing Remarks", time: "07:30 - 07:50 PM", color: "red", duration: 1.5 },
    { title: "Event Ends / Guest Departure", time: "07:50 - 08:00 PM", color: "yellow", duration: 1.6 },
]

const codeOfConduct: ConductItem[] = [
    { icon: "check_circle", text: "Maintain complete silence while a speller is on stage. Turn all electronic devices to silent mode.", color: "blue", duration: 0.5 },
    { icon: "check_circle", text: "Applaud participants only after they have completed their turn and are returning to their seat.", color: "blue", duration: 0.6 },
    { icon: "check_circle", text: "Guests must remain seated and avoid entering or exiting the auditorium during a spelling round.", color: "blue", duration: 0.7 },
    { icon: "check_circle", text: "Please show respect to all participants, judges, and event staff at all times.", color: "blue", duration: 0.8 },
]

const rulesAndRestrictions: RuleItem[] = [
    { icon: "no_photography", text: "Flash photography and video recording are strictly prohibited to avoid distracting participants.", color: "red", duration: 0.5 },
    { icon: "no_food", text: "Food and beverages are not permitted inside the competition hall. Water bottles are allowed.", color: "red", duration: 0.6 },
]

export default function GuestGuideline() {
    return (
        <div className="md:container mx-4 md:mx-auto md:px-36 space-y-4 mb-20 md:mb-32">
            <h1 className="modak cursor-default text-center text-3xl md:text-5xl text-shadow-indigo-600/25 hover:text-shadow-sm">
                Guest & Audience Guidelines
            </h1>
            <p className="text-gray-600 text-center text-xs md:text-md mb-12 md:mb-24">
                Welcome to the{" "}
                <span className="font-bold text-black">Khmer American Annual Spelling Bee Contest!</span>{" "}
                To ensure a fair and enjoyable event for everyone, please review the following guidelines.
                Your cooperation is greatly appreciated.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-6">
                    <section className="flex flex-col p-6 bg-white/10 backdrop-blur-sm shadow-xl shadow-indigo-600/25 rounded-2xl">
                        <h2 className="flex items-center gap-2 md:gap-3 md:text-xl font-bold text-md">
                            <span className="material-symbols-outlined text-green-600">schedule</span>
                            Event Schedule Highlights
                        </h2>

                        <div className="mt-6 space-y-6">
                            {schedule.map(({ title, time, color, duration }, i) => (
                                <div key={i} className="flex items-start md:gap-4 gap-2">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            className={`material-symbols-outlined text-${color}-600`}
                                        >
                                            arrow_right
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            <p className="text-sm md:text-md font-medium leading-tight">{title}</p>
                                            <p className="text-xs md:text-sm text-gray-600">{time}</p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                    </section>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-6">
                    {/* Code of Conduct */}
                    <section className="flex flex-col p-6 bg-white/10 backdrop-blur-sm shadow-xl shadow-indigo-600/25 rounded-2xl">
                        <h2 className="flex items-center gap-3 md:text-xl font-bold text-md">
                            <span className="material-symbols-outlined text-green-600 ">gavel</span>
                            Code of Conduct
                        </h2>
                        <ul className="mt-4 flex flex-col gap-4">
                            {codeOfConduct.map(({ icon, text, color, duration }, i) => (
                                <motion.li initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    key={i}
                                    className="flex items-start gap-3 md:text-md font-bold text-xs">
                                    <span className={`material-symbols-outlined text-${color}-600`}>{icon}</span>
                                    <p className="flex-1">{text}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </section>

                    {/* Rules & Restrictions */}
                    <section className="flex flex-col p-6 bg-white/10 backdrop-blur-sm shadow-xl shadow-indigo-600/25 rounded-2xl">
                        <h2 className="flex items-center gap-3 md:text-xl font-bold text-md">
                            <span className="material-symbols-outlined text-red-600">block</span>
                            Rules &amp; Restrictions
                        </h2>
                        <ul className="mt-4 flex flex-col gap-4">
                            {rulesAndRestrictions.map(({ icon, text, color, duration }, i) => (
                                <motion.li
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    key={i}
                                    className="flex items-start gap-3 md:text-md font-bold text-xs">
                                    <span className={`material-symbols-outlined text-${color}-600 `}>{icon}</span>
                                    <p className="flex-1">{text}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
