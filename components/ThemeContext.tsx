"use client"

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react"
import { io, Socket } from "socket.io-client"

const SERVER_URL = process.env.NEXT_PUBLIC_THEME_SERVER!

type ThemeContextType = {
  themeVars: Record<string, string>
  visual: string
  isConnected: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  themeVars: {},
  visual: "none",
  isConnected: false
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const socketRef = useRef<Socket | null>(null)
  const themeVarsRef = useRef<Record<string, string>>({})
  const [themeVars, setThemeVars] = useState<Record<string, string>>({})
  const [visual, setVisual] = useState<string>("none")
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const socket = io(SERVER_URL, {
      transports: ["websocket"],
      reconnection: true,
    })
    socketRef.current = socket

    const applyTheme = (theme: Record<string, string>) => {
      themeVarsRef.current = theme
      setThemeVars(theme)
      setVisual(theme.visual || "none")
      
      const root = document.documentElement
      Object.entries(theme).forEach(([k, v]) => root.style.setProperty(`--${k}`, v))

      if (theme["typography-enabled"] === "false") {
        root.classList.add("typography-disabled")
      } else {
        root.classList.remove("typography-disabled")
      }
    }

    socket.on("connect", () => {
      setIsConnected(true)
      socket.emit("getInitialTheme")
    })

    socket.on("disconnect", () => {
      setIsConnected(false)
    })

    socket.on("themeUpdate", (newTheme: Record<string, string>) => {
      applyTheme(newTheme)
    })

    socket.on("themeVariableUpdate", ({ variable, value }: { variable: string; value: string }) => {
      const newTheme = { ...themeVarsRef.current, [variable]: value }
      applyTheme(newTheme)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ themeVars, visual, isConnected }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)