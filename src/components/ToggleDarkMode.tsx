"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ToggleDarkMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() =>
          currentTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        <Image
          src={currentTheme === "dark" ? "/sun.svg" : "/moon.svg"}
          alt="Toggle Dark Mode"
          width={20}
          height={20}
        />
      </button>
    </>
  );
}
