import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ReactLenis
        root
        options={{
          // Mobile
          syncTouch: true,
          syncTouchLerp: 0.08,
          touchMultiplier: 1.1,

          // General
          lerp: 0.1,
          infinite: false,
          overscroll: true,
          autoResize: true, // Important for mobile
        }}
      >
        <App />
      </ReactLenis>
    </ThemeProvider>
  </StrictMode>
)
