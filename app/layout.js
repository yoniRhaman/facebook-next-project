import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/components/navbar/navbar";
import ProductProvider from "@/utils/contexts/productContext";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "facbook ",
  description: "Simple facbook app for learning next js",
};

export default function RootLayout({ children }) {
  const token = getCookie("token", { cookies });
  return (
    <html lang="en">
      <body className={inter.className}>
        {token && <Navbar />}
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
