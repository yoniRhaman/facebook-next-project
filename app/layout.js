import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/components/navbar/navbar";
import ProductProvider from "@/utils/contexts/productContext";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { CategoryProvider } from "@/utils/contexts/categoryContext";
import ChatProvider from "@/utils/contexts/ChatContext";
import { PostProvider } from "@/utils/contexts/postContext";
import { GroupProvider } from "@/utils/contexts/groupContext";

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
        <ProductProvider>
          <GroupProvider>
            <ChatProvider>
              <CategoryProvider>
                <PostProvider>
                  {children}
                </PostProvider>
              </CategoryProvider>
            </ChatProvider>
          </GroupProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
