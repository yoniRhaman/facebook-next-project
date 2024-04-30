import Navbar from "@/utils/components/navbar/navbar";
import Marketplace from "@/utils/components/marketplace/marketplace";
import Groups from "@/utils/components/groups/groups";
import MainBox from "@/utils/components/mainBox/mainBox";
export default function Home() {
  return (
    <div>
      <Navbar />
      <MainBox />
      <Groups />
      <Marketplace />
    </div>
  );
}
