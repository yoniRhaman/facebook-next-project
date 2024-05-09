import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "facbook ",
  description: "Simple facbook app for learning next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
