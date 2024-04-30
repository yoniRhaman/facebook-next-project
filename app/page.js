import Navbar from "@/utils/components/navbar/navbar";
import Marketplace from "@/utils/components/marketplace/marketplace";
import Groups from "@/utils/components/groups/groups";
import FloatingAction from "@/utils/components/floatingActionButton/floatingAction";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FloatingAction />
    </div>
  );
}
