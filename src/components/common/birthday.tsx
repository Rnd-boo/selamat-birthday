import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useEffect, useState } from "react"
import Message from "./message"

import img3 from "@/assets/3.png"
import img4 from "@/assets/4.png"
import imgback from "@/assets/Background.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function BirthdayComponent() {
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    const showMemo = setTimeout(() => {
      setTimer(true)
    }, 2500)

    return () => clearTimeout(showMemo)
  }, [])

  useEffect(() => {
    if (!timer) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: () => ScrollTrigger.maxScroll(window),
        scrub: true,
        markers: true, // remove when finished
      },
    })

    tl.to(".giftbox", {
      keyframes: [
        { rotation: -2 },
        { rotation: 2 },
        { rotation: -2 },
        { rotation: 2 },
        { rotation: -4 },
        { rotation: 4 },
        { rotation: -6 },
        { rotation: 6 },
        { rotation: -8 },
        { rotation: 8 },
        { rotation: 0 },
      ],
      transformOrigin: "50% 100%",
      ease: "none",
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [timer])

  return (
    <div className="birthday-section">
      {!timer ? (
        <Message />
      ) : (
        <div className="mt-64 mb-20 flex w-full flex-col items-center">
          <div className="mb-20 flex flex-col items-center">
            <h1 className="text-xl">Swipe UP</h1>

            <DotLottieReact
              src="/swipe-arrow.lottie"
              loop
              autoplay
              className="size-16"
            />
          </div>

          <img src={img3} alt="" />

          <img src={imgback} alt="" />

          <img src={img4} className="mt-16" alt="" />

          {/* Gift fixed at bottom */}
          <div className="pointer-events-none fixed bottom-0 left-0 z-10 flex w-full justify-center">
            <img
              src="/giftbox-svgrepo-com.svg"
              alt="Gift Box"
              className="giftbox w-full origin-bottom"
            />
          </div>
        </div>
      )}
    </div>
  )
}
