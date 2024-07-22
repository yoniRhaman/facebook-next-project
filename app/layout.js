import { Inter } from "next/font/google"; // Import the Inter font from Google Fonts for styling
import "./globals.css"; // Import global CSS styles
import Navbar from "@/utils/components/navbar/navbar"; // Import the Navbar component
import ProductProvider from "@/utils/contexts/productContext"; // Import ProductProvider for product context
import { cookies } from "next/headers"; // Import cookies utility from Next.js
import { getCookie } from "cookies-next"; // Import getCookie function for accessing cookies
import { CategoryProvider } from "@/utils/contexts/categoryContext"; // Import CategoryProvider for category context
import ChatProvider from "@/utils/contexts/ChatContext"; // Import ChatProvider for chat context
import { PostProvider } from "@/utils/contexts/postContext"; // Import PostProvider for post context
import { GroupProvider } from "@/utils/contexts/groupContext"; // Import GroupProvider for group context

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application
export const metadata = {
  title: "facbook", // Title of the application
  description: "Simple facbook app for learning next js", // Description of the application
};

/**
 * RootLayout component serves as the root layout for the application.
 * It includes global providers and conditional rendering for the Navbar.
 *
 * @param {Object} props - Component props
 * @param {JSX.Element} props.children - The child components to be rendered within this layout
 * @returns {JSX.Element} The root HTML structure of the application
 */
export default function RootLayout({ children }) {
  const token = getCookie("token", { cookies }); // Retrieve the authentication token from cookies

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Conditionally render the Navbar component if the user is authenticated */}
        {token && <Navbar />}
        {/* Wrapping children with various context providers to manage global state */}
        <ProductProvider>
          <GroupProvider>
            <ChatProvider>
              <CategoryProvider>
                <PostProvider>
                  {children} {/* Render the child components here */}
                </PostProvider>
              </CategoryProvider>
            </ChatProvider>
          </GroupProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
