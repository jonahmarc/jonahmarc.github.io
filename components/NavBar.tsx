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
      }
    ];

  return (
    <nav className="h-[100px] w-full
        py-15 px-5 lg:px-10
        flex flex-shrink-0 justify-around items-center lg:justify-end
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
