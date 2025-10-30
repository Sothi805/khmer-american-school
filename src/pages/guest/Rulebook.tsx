"use client"
import { AnimatePresence, motion } from "motion/react"

type RuleItem = {
  type?: "disc" | "decimal"
  points: string[]
}

type RuleSection = {
  title: string
  content: RuleItem
}

const rulebookSections: RuleSection[] = [
  {
    title: "1. Contestant Eligibility",
    content: {
      points: [
        "Contestants must be currently enrolled in grades 4 through 8 at Khmer American School.",
        "All contestants must have parental consent to participate.",
        "Previous national-level spelling bee winners are not eligible to compete.",
      ],
    },
  },
  {
    title: "2. Word Source & Lists",
    content: {
      points: [
        "The official dictionary for the competition is the Merriam-Webster Unabridged online dictionary.",
        "Word lists will be provided to registered contestants one month prior to the event.",
        "Words in the final rounds may be from outside the provided lists.",
      ],
    },
  },
  {
    title: "3. Competition Format",
    content: {
      points: [
        "The competition will consist of multiple rounds, starting with a preliminary written test.",
        "Subsequent rounds will be oral, one-by-one elimination style.",
        "The competition continues until one speller remains.",
      ],
    },
  },
  {
    title: "4. Gameplay Rules",
    content: {
      points: [
        "Each speller has 90 seconds to spell the given word.",
        "Spellers may ask for the word's definition, part of speech, and language of origin.",
        "Once a speller begins to spell, they may not change the letters or their sequence.",
      ],
    },
  },
  {
    title: "5. Judging and Appeals",
    content: {
      type: "decimal",
      points: [
        "The head judge has the final say in all decisions.",
        "Appeals must be made by the contestant's designated parent or guardian before the start of the next round.",
        "Only appeals concerning mispronunciation by the pronouncer or incorrect information will be considered.",
      ],
    },
  },
  {
    title: "6. Awards and Recognition",
    content: {
      points: [
        "The top three spellers will receive trophies and cash prizes.",
        "The school champion will advance to the regional spelling bee competition.",
        "All participants will receive a certificate of participation.",
      ],
    },
  },
]

const Rulebook = () => {
  return (
    <div className="md:container mx-4 md:mx-auto md:px-36 space-y-4">
      <h1 className="modak cursor-default text-center text-3xl md:text-5xl text-shadow-indigo-600/25 hover:text-shadow-sm">
        Official Rulebook
      </h1>
      <p className="text-center text-xs md:text-md text-gray-600 mb-12 md:mb-24">
        Welcome to all contestants! This Rulebook contains all the official rules and procedures for the{" "}
        <span className="text-black font-bold">Khmer American School Annual Spelling Bee Contest</span>.
        We wish all our beloved contestants the best of luck!
      </p>

      <div className="flex flex-col gap-4 md:gap-10 p-4 md:p-10 mb-20 md:mb-32 bg-white/10 backdrop-blur-sm shadow-sm shadow-puple-950/25 rounded-2xl">
        {rulebookSections.map(({ title, content }, i) => (
          <section
            key={i}
          >
            <h2 className="md:text-2xl text-md font-bold text-text-dark">{title}</h2>
            <div className="mt-4 border-l md:border-l-2 border-blue-500 pl-6">
              <ul
                className={`list-${content.type ?? "disc"} space-y-4 text-xs md:text-base pl-1 md:pl-5 text-gray-600 leading-relaxed text-text-dark/90`}
              >
                {content.points.map((point, j) => (
                  <AnimatePresence mode="wait">
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{
                        duration: 0.5 + j * 0.1, // start from 0.5 and increment 0.1 per bullet
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {point}
                    </motion.li>
                  </AnimatePresence>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Rulebook
