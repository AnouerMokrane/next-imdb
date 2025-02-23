import Link from "next/link";
import ToggleDarkMode from "./ToggleDarkMode";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/">
            <span className="ml-2 text-2xl font-bold bg-amber-500 p-2 rounded-md text-gray-900 dark:text-white">
              IMDb
            </span>
          </Link>
          <SignedIn>
            <Link href={"/favorites"}>Favorites</Link>
          </SignedIn>
        </div>
        <div className="flex items-center space-x-4">
          <ToggleDarkMode />
          <SignedOut>
            <Link
              href="/sign-in"
              className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
