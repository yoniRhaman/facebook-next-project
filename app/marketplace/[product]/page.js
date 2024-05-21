import { getAllProducts } from "@/utils/api/marketplaceApi";
import ProductPageComponent from "@/utils/components/productPage/productPage";

async function ProductPage() {
  const products = await getAllProducts();
  return <ProductPageComponent products={products} />;
}
export default ProductPage;
