'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <nav className="sticky z-50 top-0 inset-x-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-6 text-sm">
          <Popover
            className="relative group"
            onMouseEnter={() => setMenuIsOpen(true)}
            onMouseLeave={() => setMenuIsOpen(false)}
          >
            <PopoverButton
              className={`text-sm font-medium ${
                menuIsOpen ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              Чистка
            </PopoverButton>
            {menuIsOpen && (
              <PopoverPanel
                anchor="bottom start"
                className="z-50 mt-8 flex flex-col p-3 border-blue-100 rounded-lg border"
              >
                <Link
                  href="/analytics"
                  className="rounded-md py-1.5 px-2.5 hover:bg-slate-200 text-sm"
                >
                  <p className="font-semibold">Стандарт</p>
                  <p className="text-neutral-500">Пари вартістю до 200$</p>
                </Link>
                <Link
                  href="/analytics"
                  className="rounded-md py-1.5 px-2.5 hover:bg-slate-200 text-sm"
                >
                  <p className="font-semibold">Преміум</p>
                  <p className="text-neutral-500">Пари вартістю до 200$</p>
                </Link>
                <Link
                  href="/analytics"
                  className="rounded-md py-1.5 px-2.5 hover:bg-slate-200 text-sm"
                >
                  <p className="font-semibold">Хайтопи</p>
                  <p className="text-neutral-500">Пари вартістю до 200$</p>
                </Link>
              </PopoverPanel>
            )}
          </Popover>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-blue-600"
          >
            Галерея
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-600"
          >
            Про Нас
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-600"
          >
            Контакти
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
