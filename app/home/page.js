import CreatePost from "@/utils/components/createPost/createPost";
import MainBox from "@/utils/components/mainBox/mainBox";
import Navbar from "@/utils/components/navbar/navbar";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <MainBox />
      <CreatePost />
    </div>
  );
}
