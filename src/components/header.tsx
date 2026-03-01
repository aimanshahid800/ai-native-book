import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-4 md:gap-10">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">AI-Native Book</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/book"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Book
            </Link>
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
