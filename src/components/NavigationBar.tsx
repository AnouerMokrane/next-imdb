"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationBar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-gray-200 dark:bg-gray-700 p-5">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            href="/trending"
            className={`font-semibold hover:text-amber-500 ${
              pathName === "/trending"
                ? "text-amber-500 dark:text-amber-500"
                : ""
            }`}
          >
            Trending
          </Link>
        </li>
        <li>
          <Link
            href="/top-rated"
            className={`font-semibold  hover:text-amber-500 ${
              pathName === "/top-rated"
                ? "text-amber-500 dark:text-amber-500"
                : ""
            }`}
          >
            Top Rated
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
