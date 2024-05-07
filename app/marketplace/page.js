import Marketplace from "@/utils/components/marketplace/marketplace";
import Marketgrid from "@/utils/components/marketgrid/marketgrid";
import "./marketplacePage.css";

function MarketplacePage() {
  return (
    <div className="MarketplacePage-container row">
      <div className="left">
        <Marketplace />
      </div>
      <div className="right">
        <Marketgrid />
      </div>
    </div>
  );
}

export default MarketplacePage;
