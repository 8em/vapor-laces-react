"use client";

import { useState } from "react";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import ChevronDownIcon from "./UI/ChevronDownIcon";
import ChevronUpIcon from "./UI/ChevronUpIcon";

interface NavLink {
  id: string;
  name: string;
  label: string;
  path: string;
  hasMenu?: boolean;
  subLinks?: NavLink[];
}

const headerLinks: NavLink[] = [
  {
    id: "services",
    name: "Чистка",
    label: "Чистка",
    path: "/services",
    hasMenu: true,
    subLinks: [
      {
        id: "standard",
        name: "Стандарт",
        label: "Стандарт",
        path: "/services/standard",
      },
      {
        id: "premium",
        name: "Преміум",
        label: "Преміум",
        path: "/services/premium",
      },
      {
        id: "hightops",
        name: "Хайтопи",
        label: "Хайтопи",
        path: "/services/hightops",
      },
    ],
  },
  { id: "gallery", name: "Галерея", label: "Галерея", path: "/gallery" },
  { id: "about-us", name: "Про Нас", label: "Про Нас", path: "/about-us" },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (id: string, hasMenu?: boolean) => {
    if (!hasMenu) return;
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === id ? null : id));
  };

  const handleMouseEnter = (id: string, hasMenu?: boolean) => {
    if (!hasMenu) return;
    setOpenMenu(id);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <header className="sticky z-50 top-0 inset-x-0 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center px-4">
        <div className="flex justify-center align-middle">
          <Link href="/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.8938 24.9539C24.3076 28.0968 20.3878 30.1009 16 30.1009C8.21229 30.1009 1.89911 23.7877 1.89911 16C1.89911 14.6681 2.08378 13.3792 2.42891 12.1578C5.07821 12.2422 7.34481 14.1567 7.84232 16.7974L9.04839 23.1989C9.25265 24.283 10.1996 25.0682 11.3028 25.0682C12.4244 25.0682 13.3814 24.2574 13.5658 23.1513L15.0471 14.2633C15.2682 12.9366 16.416 11.9644 17.7609 11.9644C19.102 11.9644 20.2477 12.9315 20.473 14.2537L21.7604 21.8139C22.0524 23.5285 23.7973 24.4952 25.5295 24.3392C26.2899 24.2707 26.8921 24.3547 26.9199 24.7834C26.9232 24.8341 26.9138 24.8913 26.8938 24.9539ZM29.5701 19.8457H27.3472H24.7186C23.3299 19.8457 22.144 18.8443 21.9109 17.4752L20.473 9.03114C20.2477 7.70897 19.102 6.74184 17.7609 6.74184C16.416 6.74184 15.2682 7.71413 15.0471 9.04069L13.5658 17.9287C13.3814 19.0349 12.4244 19.8457 11.3028 19.8457C10.1996 19.8457 9.25265 19.0604 9.04839 17.9763L7.23055 8.32777C7.03519 7.29088 7.1125 6.20292 7.69985 5.32639C8.05709 4.79327 8.54583 4.18742 9.1803 3.65494C11.2014 2.53608 13.5263 1.89911 16 1.89911C23.7877 1.89911 30.1009 8.21229 30.1009 16C30.1009 17.3332 29.9158 18.6232 29.5701 19.8457ZM32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
                fill="#3971FF"
              />
            </svg>
          </Link>
        </div>
        <nav className="pl-[20px]">
          <ul className="flex text-sm flex-row gap-8 list-none p-0">
            {headerLinks.map((link) => (
              <li
                id={link.id}
                key={link.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.id, link.hasMenu)}
                onMouseLeave={handleMouseLeave}
              >
                {link.hasMenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 cursor-pointer hover:text-primary h-[55px]"
                      aria-expanded={openMenu === link.id}
                      aria-label="Toggle dropdown"
                      onClick={() => toggleMenu(link.id, link.hasMenu)}
                    >
                      {link.label}{" "}
                      {openMenu === link.id ? (
                        <ChevronUpIcon />
                      ) : (
                        <ChevronDownIcon />
                      )}
                    </button>
                    {openMenu === link.id && (
                      <div className="absolute left-0 top-full z-50 flex flex-col p-3 bg-white rounded-lg shadow-lg">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.id}
                            href={subLink.path}
                            className="rounded-md py-1.5 px-2.5 hover:bg-slate-200 text-sm"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.path}
                    target="_blank"
                    className="flex items-center gap-1 cursor-pointer hover:text-primary h-[55px]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
