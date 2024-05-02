import Marketplace from "@/utils/components/marketplace/marketplace";
import Marketgrid from "@/utils/components/marketgrid/marketgrid";
import Navbar from "@/utils/components/navbar/navbar";

function MarketplacePage() {
  return (
    <div>
      <Navbar />
      <Marketgrid />
      <Marketplace />
    </div>
  );
}

export default MarketplacePage;
