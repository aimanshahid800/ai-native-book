"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-muted-foreground hover:text-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 bg-background md:hidden">
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <nav className="grid grid-flow-row auto-rows-max gap-4">
              <Link
                href="/book"
                onClick={toggleMenu}
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
              >
                Book
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
