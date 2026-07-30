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

  return (
    <div className="flex min-h-svh p-6">
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
