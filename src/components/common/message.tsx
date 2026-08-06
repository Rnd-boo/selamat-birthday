import { ConfettiFireworks } from "./confetti-fireworks"
import { motion } from "motion/react"
import bgMessage from "@/assets/bg-message.webp"

export default function Message() {
  return (
    <div className="fixed inset-0 overflow-hidden overscroll-none text-white">
      <ConfettiFireworks />

      <img
        src={bgMessage}
        alt="Photocard"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <motion.div
        className="relative z-10 flex h-full flex-col justify-between text-center"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div></div>
        <div>
          <p>11-08-26</p>
          <h1 className="font-great text-5xl">Happy Birthday</h1>
          <p className="my-2 font-pacifico text-2xl">Michelle Joycelyn</p>
        </div>

        <p className="text-center font-poppins text-xs font-light">
          I hope this little gift will make you happy 😜
        </p>
      </motion.div>
    </div>
  )
}
