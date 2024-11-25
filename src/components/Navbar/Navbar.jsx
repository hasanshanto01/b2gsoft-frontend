"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import navLogo from "../../../public/nav-logo.png";
import {
  IoSearchOutline,
  IoBagOutline,
  HiOutlineUser,
  CgMenuLeft,
} from "../../utils/Icons";

function Navbar() {
  const pathname = usePathname();

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
    <nav className="px-4 lg:px-20 py-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <CgMenuLeft className="text-2xl block lg:hidden" />
        <Link href="/">
          <Image src={navLogo} alt="Brand Logo" width={140} priority />
        </Link>
      </div>

      <ul className="hidden lg:flex items-center gap-4">
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

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 rounded-2xl bg-common-white overflow-hidden">
          <div className="flex-shrink-0 pl-1 py-1">
            <IoSearchOutline />
          </div>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            className="w-full outline-none py-1 pr-1"
          />
        </div>
        <IoSearchOutline className="text-2xl lg:hidden" />

        <div className="relative">
          <IoBagOutline className="text-2xl" />
          <div className="h-4 w-4 rounded-full bg-[#1E1E1E] text-default-color flex items-center justify-center  absolute -top-1 -right-1">
            <span className="text-xs">0</span>
          </div>
        </div>
        <HiOutlineUser className="text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;
