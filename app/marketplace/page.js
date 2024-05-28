import Marketplace from "@/utils/components/marketplace/marketplace";
import Marketgrid from "@/utils/components/marketgrid/marketgrid";
import "./marketplacePage.css";
import { getAllProducts } from "@/utils/api/marketplaceApi";
import { useProductContext } from "@/utils/contexts/productContext";

async function MarketplacePage() {
  // const productsFromServer = await getAllProducts();
  return (
    <div className="MarketplacePage-container row">
      <div className="left">
        <Marketplace />
      </div>
      <div className="right">
        {/* <Marketgrid productsFromServer={productsFromServer} /> */}
      </div>
    </div>
  );
}

export default MarketplacePage;
