"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import ChevronDownIcon from "./UI/ChevronDownIcon";

// const Header = () => {
//   return (
//     <nav className="sticky z-50 top-0 inset-x-0 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
//         <div className="flex items-center gap-6 text-sm">

//           <Popover className="relative group">
//             <PopoverButton
//               className="text-sm font-medium hover:text-blue-600 group-hover:text-blue-600"
//             >
//               Чистка
//             </PopoverButton>

//             <PopoverPanel
//               static
//               className="min-w-[220px] absolute left-0 top-full  z-50 flex flex-col p-3 bg-white rounded-lg shadow-lg invisible group-hover:visible"
//             >
//               <Link
//                 href="/analytics"
//                 className="rounded-md py-1.5 px-2.5 hover:bg-slate-200 text-sm"
//               >
//                 <p className="font-semibold">Стандарт</p>
//                 <p className="text-neutral-500">Пари вартістю до 200$</p>
//               </Link>
//               <Link
//                 href="/analytics"
//                 className="rounded-md py-1.5 px-2.5 hover:bg-slate-200 text-sm"
//               >
//                 <p className="font-semibold">Преміум</p>
//                 <p className="text-neutral-500">Пари вартістю до 200$</p>
//               </Link>
//               <Link
//                 href="/analytics"
//                 className="rounded-md py-1.5 px-2.5 hover:bg-slate-200 text-sm"
//               >
//                 <p className="font-semibold">Хайтопи</p>
//                 <p className="text-neutral-500">Пари вартістю до 200$</p>
//               </Link>
//             </PopoverPanel>
//           </Popover>

//           <Link
//             href="/services"
//             className="text-sm font-medium hover:text-blue-600"
//           >
//             Галерея
//           </Link>
//           <Link
//             href="/about"
//             className="text-sm font-medium hover:text-blue-600"
//           >
//             Про Нас
//           </Link>
//           <Link
//             href="/contact"
//             className="text-sm font-medium hover:text-blue-600"
//           >
//             Контакти
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

interface DropdownLink {
  id: string;
  name: string;
  imageUrl?: string;
  hasMenu?: boolean;
}

interface DropdownLinkProps {
  id: string;
  title: string;
  data: DropdownLink[];
  hasImage?: boolean;
  style?: string;
  selectedIf?: string;
  onSelect?: (id: string) => void;
}

const headerLinks: { label: string; path: string; hasMenu?: boolean }[] = [
  { label: "Чистка", path: "/services", hasMenu: true },
  { label: "Галерея", path: "/gallery" },
  { label: "Про Нас", path: "/about-us" },
];

const Header = () => {
  return (
    <header className="sticky z-50 top-0 inset-x-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <ul className="flex text-sm flex-row gap-8 list-none p-0">
          {headerLinks.map((link) => {
            return (
              
              <li key={link.path}>
                <Link
                  className="flex flex-row items-center justify-center gap-1 cursor-pointer"
                  href={link.path}
                >
                  {link.label}
                  {link.hasMenu && <ChevronDownIcon />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;