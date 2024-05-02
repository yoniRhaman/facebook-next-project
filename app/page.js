import Navbar from "@/utils/components/navbar/navbar";
import Marketplace from "@/utils/components/marketplace/marketplace";
import Groups from "@/utils/components/groups/groups";

import MainBox from "@/utils/components/mainBox/mainBox";
export default function Home() {
  return (
    <div>
      <Groups />
import Login from "@/utils/components/login/login";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Marketplace />
      <Login />
    </div>
  );
}
