import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/components/navbar/navbar";
import ProductProvider from "@/utils/contexts/productContext";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { CategoryProvider } from "@/utils/contexts/categoryContext";

// import GroupProvider from "@/utils/contexts/groupContext";
import ChatProvider from "@/utils/contexts/ChatContext";

import { GroupProvider } from "@/utils/contexts/groupContext";
import { PostProvider } from "@/utils/contexts/postContext";

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
              <CategoryProvider>{children}</CategoryProvider>
            </ChatProvider>
          </GroupProvider>
        </ProductProvider>

        <PostProvider>
        <ProductProvider>
          <GroupProvider>
            <CategoryProvider>{children}</CategoryProvider>
          </GroupProvider>
        </ProductProvider>
        </PostProvider>

      </body>
    </html>
  );
}
