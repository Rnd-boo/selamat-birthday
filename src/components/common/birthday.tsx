import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useEffect, useState } from "react"
import Message from "./message"

export function BirthdayComponent() {
  const [timer, setTimer] = useState<boolean>(false)

  useEffect(() => {
    const showMemo = setTimeout(() => {
      setTimer(true)
    }, 5000)
    return () => clearTimeout(showMemo)
  }, [setTimer])
  return (
    <div>
      {!timer ? (
        <Message />
      ) : (
        <div className="mt-64 mb-20 flex w-full flex-col items-center justify-center">
          <div className="mb-20 flex flex-col items-center">
            <h1 className="text-xl">Swipe UP</h1>
            <DotLottieReact
              src="/assets/swipe-arrow.lottie"
              loop
              autoplay
              className="size-16"
            />
          </div>
          <img src="/assets/3.png" />
          <img src="/assets/Background.png" />
          <img src="/assets/4.png" className="mt-16" />
          <div className="h-300"></div>
          <div className="fixed bottom-0 z-10 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="420"
              height="420"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-gift-icon lucide-gift"
            >
              <path d="M12 7v14" />
              <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
              <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
              <rect x="3" y="7" width="18" height="4" rx="1" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
