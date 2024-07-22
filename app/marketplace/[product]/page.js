import { getProductById } from "@/utils/api/marketplaceApi"; // Import function to fetch product data by ID
import ProductPageComponent from "@/utils/components/productPage/productPage"; // Import component to display product details
import { getCookie } from "cookies-next"; // Import function to retrieve cookies
import { cookies } from "next/headers"; // Import cookies utility from Next.js

/**
 * ProductPage component fetches and displays product details based on the provided product ID.
 * It retrieves the product data from the server and passes it to the ProductPageComponent for rendering.
 *
 * @param {Object} params - Component parameters
 * @param {string} params.product - Product ID to fetch product data
 * @returns {JSX.Element} The rendered ProductPageComponent with product details
 */
async function ProductPage({ params: { product } }) {
  // Retrieve the JWT token from cookies
  const token = getCookie("token", { cookies });

  // Fetch the product data from the server using the product ID and token
  const productFromServer = await getProductById(token, product);

  // Render the ProductPageComponent with the fetched product data
  return <ProductPageComponent myProduct={productFromServer} />;
}

export default ProductPage; // Export ProductPage as the default export
