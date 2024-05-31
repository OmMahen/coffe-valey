import { Inter } from "next/font/google";
import "./globals.css";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee Valey",
  description: "Coffee Valey by Mahendra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Flowbite>
          <DarkThemeToggle className="fixed bottom-0 right-0 z-50 m-4 scale-130 " />
          {children}
        </Flowbite>
      </body>
    </html>
  );
}
