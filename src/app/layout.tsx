import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProviderPage from "@/components/ThemeProvider";
import NavigationBar from "@/components/NavigationBar";
import { ClerkProvider } from "@clerk/nextjs";
import Search from "@/components/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "movie-app",
  description: "A movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.className} antialiased dark:bg-gray-800 dark:text-white bg-white text-gray-900 transition-colors duration-300`}
        >
          <ThemeProviderPage>
            <Header />
            <NavigationBar />
            <Search />
            <div className="min-h-screen container mx-auto sm:px-4 md:px-8 pb-20">
              {children}
            </div>
          </ThemeProviderPage>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
