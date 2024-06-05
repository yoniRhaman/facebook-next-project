import { getUserPosts } from "@/utils/api/postsApi";
import { getUserDataForProfile, getUsersPictures } from "@/utils/api/usersApi";
import UserProfile from "@/utils/components/usersProfile/userProfile";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";


async function ProfilePage({ params: { id } }) {
    const token = getCookie("token", { cookies });
    const userData = await getUserDataForProfile(token, id);
    const uid = getCookie("uid", { cookies });
    const freindsProfilePictures = await getUsersPictures(token, { freinds: userData.freinds });
    const userPosts = await getUserPosts(id, token);
    userData["userPosts"] = userPosts;
    // console.log("userPosts:::::::::::::::::::::::::::::", userPosts);
    //it's checking if the displayed profile is a friend of dhe user and adding the result to the userData
    const isFreind = userData.freinds.includes(uid);
    userData["isFreind"] = isFreind;

    //adding the friends pictures to the userData
    userData["freindsPictures"] = freindsProfilePictures;

    userData["token"] = token;
    userData["uid"] = uid;
    userData["fid"] = id;
    console.log("user data :::::::::", userData);
    return <div ><UserProfile userData={userData} token={token} /></div>;
}

export default ProfilePage;
