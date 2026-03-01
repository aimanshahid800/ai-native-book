import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="container flex h-20 items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-10 md:gap-14">
          <MobileNav />
          <Link href="/" className="group flex items-center space-x-3 transition-transform hover:scale-105 active:scale-95">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all group-hover:rotate-12 group-hover:scale-110">
              <Sparkles className="h-6 w-6 fill-current" />
            </div>
            <span className="hidden text-xl font-black tracking-tighter sm:inline-block">
              AI-Native <span className="text-primary opacity-80">Book</span>
            </span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link
              href="/book"
              className="text-sm font-bold tracking-tight text-muted-foreground transition-all hover:text-primary hover:tracking-widest"
            >
              The Book
            </Link>
            <Link
              href="/about"
              className="text-sm font-bold tracking-tight text-muted-foreground transition-all hover:text-primary hover:tracking-widest"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold tracking-tight text-muted-foreground transition-all hover:text-primary hover:tracking-widest"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-6">
          <nav className="flex items-center space-x-4">
            <ModeToggle />
            <Link
              href="/book"
              className="hidden sm:flex h-10 items-center justify-center rounded-full bg-primary/10 px-6 text-xs font-black uppercase tracking-widest text-primary ring-1 ring-primary/20 transition-all hover:bg-primary/20 hover:scale-105 active:scale-95 md:flex"
            >
              Begin Reading
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
