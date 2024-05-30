import Marketplace from "@/utils/components/marketplace/marketplace";
import Marketgrid from "@/utils/components/marketgrid/marketgrid";
import "./marketplacePage.css";
import { getAllProducts } from "@/utils/api/marketplaceApi";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function MarketplacePage() {
  // const productsFromServer = await getAllProducts();

  const productsFromServer = await getAllProducts(
    getCookie("token", { cookies })
  );

  return (
    <div className="MarketplacePage-container row">
      <div className="left">
        <Marketplace />
      </div>
      <div className="right">
        <Marketgrid productsFromServer={productsFromServer} />
      </div>
    </div>
  );
}

export default MarketplacePage;
