import { getUserDataForProfile } from "@/utils/api/usersApi";
import UserProfile from "@/utils/components/usersProfile/userProfile";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function ProfilePage() {
  const userData = await getUserDataForProfile(getCookie("token", { cookies }), getCookie("uid", { cookies }));
  return <div ><UserProfile userData={userData} /></div>;
}

export default ProfilePage;
