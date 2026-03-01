"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-10 w-10 rounded-xl bg-muted/20" />

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-primary/50 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/10 active:scale-95 glass"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
            className="flex h-full w-full items-center justify-center text-primary"
          >
            <Moon className="h-[1.2rem] w-[1.2rem] fill-current" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
            className="flex h-full w-full items-center justify-center text-primary"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] fill-current" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
