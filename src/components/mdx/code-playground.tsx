"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Terminal, Play, Check } from "lucide-react"

interface PlaygroundProps {
  code: string
  language: string
  title: string
}

export function CodePlayground({ code, language, title }: PlaygroundProps) {
  const [copied, setCopied] = useState(false)
  const [output, setOutput] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRun = () => {
    setIsRunning(true)
    // Simulate runtime
    setTimeout(() => {
      setOutput([
        `Running ${title}...`,
        `Analyzing ${language} syntax...`,
        "Success! Token utilization: 142 tokens.",
        "Output: Successfully initialized Agentic Workflow."
      ])
      setIsRunning(false)
    }, 1500)
  }

  return (
    <div className="my-10 overflow-hidden rounded-xl border bg-zinc-950 shadow-2xl glass-dark">
      <div className="flex items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{title}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md p-1.5 text-xs font-medium text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 rounded-md bg-primary/20 p-1.5 text-xs font-bold text-primary ring-1 ring-primary/30 transition-all hover:bg-primary/30 disabled:opacity-50"
          >
            <Play className="h-3 w-3 fill-current" />
            {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div className="relative p-6 font-mono text-sm leading-relaxed text-zinc-100 selection:bg-primary/30">
        <pre><code>{code}</code></pre>
      </div>

      {output.length > 0 && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="border-t border-white/5 bg-black/40 p-4 font-mono text-[13px]"
        >
          {output.map((line, i) => (
            <div key={i} className={i === output.length - 1 ? "text-primary font-bold" : "text-zinc-500"}>
              <span className="mr-2 opacity-50">$</span>{line}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
