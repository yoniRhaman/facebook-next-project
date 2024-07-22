import { getUserPosts } from "@/utils/api/postsApi"; // Importing the function to fetch posts for a user
import { getCommonFriendsPictures, getUserDataForProfile, getUsersPictures } from "@/utils/api/usersApi"; // Importing functions to fetch user data and pictures
import UserProfile from "@/utils/components/usersProfile/userProfile"; // Importing the UserProfile component
import { getCookie } from "cookies-next"; // Importing getCookie to access cookies
import { cookies } from "next/headers"; // Importing cookies to handle headers in Next.js

/**
 * ProfilePage component fetches detailed user data, including posts and friend information,
 * and renders the UserProfile component with the complete user data.
 *
 * @param {Object} params - Parameters passed to the component.
 * @param {string} params.id - The ID of the user whose profile is being viewed.
 * @returns {JSX.Element} The rendered ProfilePage component containing UserProfile with user data.
 */
async function ProfilePage({ params: { id } }) {
  // Retrieve the JWT token from cookies
  const token = getCookie("token", { cookies });
  
  // Fetch the user data for the profile using the token and user ID
  const userData = await getUserDataForProfile(token, id);
  
  // Retrieve the current user's ID from cookies
  const uid = getCookie("uid", { cookies });
  
  // Fetch profile pictures of the user's friends
  const freindsProfilePictures = await getUsersPictures(token, { freinds: userData.freinds });
  
  // Fetch pictures of common friends between the current user and the viewed user
  const commonFreinds = await getCommonFriendsPictures(token, { uid: uid, freinds: userData.freinds });
  
  // Fetch posts of the user whose profile is being viewed
  const userPosts = await getUserPosts(id, token);
  
  // Add the fetched posts to the user data object
  userData["userPosts"] = userPosts;
  
  // Determine if the currently logged-in user is a friend of the profile user
  const isFreind = userData.freinds.includes(uid);
  
  // Add the friendship status to the user data object
  userData["isFreind"] = isFreind;
  
  // Add friends' profile pictures and common friends' pictures to the user data object
  userData["freindsPictures"] = freindsProfilePictures;
  userData["commoFreindsPictures"] = commonFreinds;
  
  // Add additional properties to user data
  userData["token"] = token;
  userData["uid"] = uid;
  userData["fid"] = id;
  
  return (
    <div>
      {/* Render the UserProfile component with the enriched user data and token */}
      <UserProfile userData={userData} token={token} />
    </div>
  );
}

export default ProfilePage; // Export ProfilePage as the default export
