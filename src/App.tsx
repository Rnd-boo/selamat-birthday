import { useEffect, useState } from "react"
import { TerminalComponent } from "./components/common/terminal"
import { BirthdayComponent } from "./components/common/birthday"

export function App() {
  const [input, setInput] = useState("")
  const [showMain, setShowMain] = useState(false)

  const isCorrect = input.trim().toLowerCase() === "pecel"

  useEffect(() => {
    if (!isCorrect) return

    const timer = setTimeout(() => {
      setShowMain(true)
    }, 3800)
    return () => clearTimeout(timer)
  }, [isCorrect])
  const isMobile = window.matchMedia("(max-width: 768px)").matches

  if (!isMobile) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1>This website is only available on mobile.</h1>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh">
      <div className="flex w-full min-w-0 flex-col items-center justify-center gap-4 text-sm leading-loose">
        <div>
          {showMain ? (
            <BirthdayComponent />
          ) : (
            <TerminalComponent
              input={input}
              setInput={setInput}
              isCorrect={isCorrect}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
