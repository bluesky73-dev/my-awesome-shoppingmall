'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/#about', label: '회사소개' },
  { href: '/#brands', label: '브랜드' },
  { href: '/#sustainability', label: '지속가능성' },
  { href: '/#history', label: '연혁' },
  { href: '/#careers', label: '채용' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/#top" className="flex items-baseline gap-2" aria-label="아뜰리에 눈 홈">
          <span className="font-serif text-xl tracking-[0.2em]">ATELIER NOON</span>
        </a>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/#contact"
          className="hidden border border-foreground px-5 py-2 text-xs tracking-widest transition-colors hover:bg-foreground hover:text-background md:inline-block"
        >
          CONTACT
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">{open ? '메뉴 닫기' : '메뉴 열기'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="모바일 메뉴" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {[...navItems, { href: '/#contact', label: '문의하기' }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
