import Marketplace from "@/utils/components/marketplace/marketplace";
import Marketgrid from "@/utils/components/marketgrid/marketgrid";
import "./marketplacePage.css";
import { getAllProducts } from "@/utils/api/marketplaceApi";

async function MarketplacePage() {
  const products = await getAllProducts();
  return (
    <div className="MarketplacePage-container row">
      <div className="left">
        <Marketplace />
      </div>
      <div className="right">
        <Marketgrid products={products} />
      </div>
    </div>
  );
}

export default MarketplacePage;
