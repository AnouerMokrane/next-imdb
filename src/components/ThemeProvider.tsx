"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider attribute={"class"}>{children}</ThemeProvider>;
}
