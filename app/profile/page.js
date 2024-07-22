import { getUserDataForProfile } from "@/utils/api/usersApi"; // Importing the function to fetch user data
import UserProfile from "@/utils/components/usersProfile/userProfile"; // Importing the UserProfile component
import { getCookie } from "cookies-next"; // Importing getCookie to access cookies
import { cookies } from "next/headers"; // Importing cookies to handle headers in Next.js

/**
 * ProfilePage component fetches user data based on cookies and renders the UserProfile component.
 *
 * @returns {JSX.Element} The rendered ProfilePage component containing UserProfile
 */
async function ProfilePage() {
  // Fetch user data using the token and user ID from cookies
  const userData = await getUserDataForProfile(
    getCookie("token", { cookies }), // Fetch JWT token from cookies
    getCookie("uid", { cookies }) // Fetch user ID from cookies
  );

  return (
    <div>
      <UserProfile userData={userData} /> {/* Render the UserProfile component with fetched user data */}
    </div>
  );
}

export default ProfilePage; // Export ProfilePage as the default export
