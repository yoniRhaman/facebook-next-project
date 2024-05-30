import { getUserDataForProfile } from "@/utils/api/usersApi";
import UserProfile from "@/utils/components/usersProfile/userProfile";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function ProfilePage({ params: { id } }) {
    const userData = await getUserDataForProfile(getCookie("token", { cookies }), id);
    console.log(userData);
    return <div ><UserProfile userData={userData} /></div>;
}

export default ProfilePage;
