"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizProps {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export function Quiz({ question, options, correctIndex, explanation }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSelect = (index: number) => {
    if (isSubmitted) return
    setSelected(index)
  }

  const handleSubmit = () => {
    if (selected === null) return
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setSelected(null)
    setIsSubmitted(false)
  }

  return (
    <div className="my-8 rounded-xl border bg-card p-6 shadow-lg glass-dark">
      <h3 className="mb-4 text-xl font-bold tracking-tight">{question}</h3>
      <div className="space-y-3">
        {options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={cn(
              "w-full rounded-lg border p-4 text-left transition-all duration-200",
              selected === index
                ? "border-primary bg-primary/10 ring-1 ring-primary"
                : "hover:border-primary/50 hover:bg-muted",
              isSubmitted && index === correctIndex && "border-green-500 bg-green-500/10 ring-green-500",
              isSubmitted && selected === index && index !== correctIndex && "border-destructive bg-destructive/10 ring-destructive"
            )}
            disabled={isSubmitted}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {isSubmitted && index === correctIndex && <Check className="h-5 w-5 text-green-500" />}
              {isSubmitted && selected === index && index !== correctIndex && <X className="h-5 w-5 text-destructive" />}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center gap-4">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="rounded-full bg-primary px-8 py-2 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 disabled:opacity-50"
          >
            Submit Answer
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center"
          >
            <p className={cn(
              "mb-4 font-bold",
              selected === correctIndex ? "text-green-500" : "text-destructive"
            )}>
              {selected === correctIndex ? "Correct!" : "Incorrect."}
            </p>
            <p className="mb-6 text-sm text-muted-foreground italic">
              {explanation}
            </p>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 rounded-full border px-6 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <RefreshCw className="h-4 w-4" /> Try Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
