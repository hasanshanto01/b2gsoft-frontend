"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logo.png";

import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  console.log("pathname:", pathname);

  const menus = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      name: "Deals",
      path: "/deals",
    },
    {
      id: 4,
      name: "What's New",
      path: "/new",
    },
  ];

  return (
    <nav className="border border-red-600 px-20 py-2 flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Brand Logo"
          // width={120}
          placeholder="blur"
          priority
        />
      </Link>

      <ul className="flex items-center gap-4">
        {menus?.map((menu) => (
          <li key={menu?.id} className="w-fit">
            <Link
              href={menu?.path}
              className={`${
                pathname === menu?.path
                  ? "text-violet1-color"
                  : "text-gray1-color"
              } font-semibold hover:text-violet1-color`}
            >
              {menu?.name}
            </Link>
          </li>
        ))}
      </ul>

      <div></div>
    </nav>
  );
}

export default Navbar;
