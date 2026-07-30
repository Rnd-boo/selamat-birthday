import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal"

export function TerminalComponent({
  input,
  setInput,
  isCorrect,
}: {
  input: string
  setInput: (value: string) => void
  isCorrect: boolean
}) {
  return (
    <Terminal sequence={false}>
      <TypingAnimation>$ input secret code</TypingAnimation>
      <AnimatedSpan delay={0}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none"
          autoFocus
          disabled={isCorrect}
        />
      </AnimatedSpan>
      {isCorrect && (
        <>
          <AnimatedSpan delay={400} className="text-blue-500">
            $ Validating Code...
          </AnimatedSpan>
          <AnimatedSpan delay={1000} className="text-green-500">
            ✔ Access Granted
          </AnimatedSpan>
          <AnimatedSpan delay={1400} className="text-green-500">
            ✔ Verifying Date
          </AnimatedSpan>
          <TypingAnimation className="text-muted-foreground" delay={1500}>
            Success! Hi there.
          </TypingAnimation>
          <TypingAnimation className="text-muted-foreground" delay={2100}>
            You will be directed.
          </TypingAnimation>
        </>
      )}
    </Terminal>
  )
}
