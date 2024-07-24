"use client";
import { createContext, useContext, useState } from "react";

// Create a context for the product state
const ProductContext = createContext();

// Custom hook to use the ProductContext
export const useProductContext = () => useContext(ProductContext);

/**
 * ProductProvider component to provide product state to its children.
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The children components that will have access to the product context.
 * @returns {JSX.Element} The ProductContext provider component.
 */
export default function ProductProvider({ children }) {
  // State to hold the products
  const [products, setProducts] = useState([]);

  return (
    // Provide the product state and setter function to the context
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
