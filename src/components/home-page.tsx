"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Cpu, Sparkles, Layers, ShieldCheck } from "lucide-react"

const features = [
  { icon: Sparkles, label: "AI-Native Reasoning" },
  { icon: Cpu, label: "Advanced LLM Workflows" },
  { icon: Layers, label: "Generative UI" },
  { icon: ShieldCheck, label: "Enterprise Guardrails" }
]

export default function HomePage({ chapters }: { chapters: any[] }) {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 -z-10 h-[500px] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      {/* Hero Section */}
      <section className="container relative flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="mx-auto flex max-w-fit items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Now Available</span>
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-xs font-medium opacity-70 italic">The complete guide for AI-Native Architects</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Building the <span className="text-gradient">Age of Intelligence</span>
          </h1>

          <p className="mx-auto max-w-[800px] text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
            A masterclass in architecting software for the LLM era. Master Agentic Workflows, Generative UI, and the future of AI-Native development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Link
            href="/book"
            className="group relative flex h-14 items-center gap-2 overflow-hidden rounded-full bg-primary px-10 font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <BookOpen className="h-5 w-5" />
            Start Reading
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="flex h-14 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-10 font-bold transition-all hover:bg-white/10 active:scale-95 glass"
          >
            Our Philosophy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid w-full grid-cols-2 gap-4 pt-20 md:grid-cols-4 md:pt-32"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 opacity-60 transition-opacity hover:opacity-100">
              <feature.icon className="h-6 w-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">{feature.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Chapter Previews */}
      <section id="chapters" className="container py-24 md:py-32">
        <div className="mb-20 flex flex-col items-center space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">The Journey Ahead</h2>
          <p className="max-w-[600px] text-muted-foreground text-lg">Five chapters designed to transform your architectural perspective.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/book#${chapter.id}`}
                className="group relative flex flex-col h-full space-y-4 rounded-2xl border bg-card/30 p-8 shadow-sm transition-all hover:scale-[1.02] hover:bg-accent hover:shadow-2xl hover:shadow-primary/5 glass-dark overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-4xl font-black opacity-5 transition-transform group-hover:scale-110 group-hover:opacity-10">
                  {chapter.order}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Chapter {chapter.order}</span>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary">{chapter.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                  {chapter.description}
                </p>
                <div className="flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100 text-primary">
                  Explore Chapter <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-32 w-full bg-gradient-to-b from-transparent to-primary/5" />
    </div>
  )
}
