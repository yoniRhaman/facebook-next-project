import Marketgrid from "@/utils/components/marketgrid/marketgrid"; // Import the Marketgrid component for displaying products
import Navbar from "@/utils/components/navbar/navbar"; // Import the Navbar component for navigation

/**
 * Home component renders the main page of the application.
 * It includes the Marketgrid component to display a grid of products.
 *
 * @returns {JSX.Element} The rendered Home component with a product grid
 */
export default function Home() {
  return (
    <div>
      <Marketgrid /> {/* Render the Marketgrid component to display products */}
    </div>
  );
}
