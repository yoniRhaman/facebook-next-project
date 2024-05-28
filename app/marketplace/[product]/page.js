import { getProductById } from "@/utils/api/marketplaceApi";
import ProductPageComponent from "@/utils/components/productPage/productPage";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function ProductPage({ params: { product } }) {
  const token = getCookie("token", { cookies });
  const productFromServer = await getProductById(token, product);
  return <ProductPageComponent myProduct={productFromServer} />;
}
export default ProductPage;
