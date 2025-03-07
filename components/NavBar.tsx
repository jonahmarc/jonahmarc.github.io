"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type NavbarLink = {
  href: string;
  name: string;
};

export default function NavBar() {

    const currentPath = usePathname();

    const navLinks: NavbarLink[] = [
      {
        href: "/",
        name: "Home",
      },
      {
        href: "/projects",
        name: "Projects",
      },
      {
        href: "/experiences",
        name: "Experiences",
      },
      {
        href: "/contact",
        name: "Contact",
      },
    ];

  return (
    <nav className="w-full h-[8%] lg:h-[10%] xl:h-[12%]
        py-5 px-5 md:px-36 lg:pr-10 xl:pr-20 mb-8 lg:mb-4
        flex justify-around items-center lg:justify-end
        text-sm xl:text-base
        font-medium">
        {
            navLinks.map((links) => (
                <Link
                    key={links.name}
                    href={links.href}
                    className={`lg:pr-10
                        hover:text-secondary-light-blue
                        ${currentPath === links.href ? 'text-secondary-light-blue' : 'text-primary-light-blue'}`}>
                        {links.name}
                </Link>
            ))
        }
    </nav>
  )
}
