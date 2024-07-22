import { getAllGroups } from "@/utils/api/groupsApi"; // Import function to fetch all groups from the API
import GroupsList from "@/utils/components/groupsList/groupsList"; // Import component to display a list of groups
import { getCookie } from "cookies-next"; // Import getCookie function for accessing cookies
import { cookies } from "next/headers"; // Import cookies object from Next.js headers

/**
 * GroupsPage component fetches and displays a list of groups.
 * It utilizes server-side API calls to fetch group data and renders 
 * the GroupsList component with the fetched data.
 *
 * @returns {JSX.Element} The rendered GroupsPage component with a list of groups
 */
async function GroupsPage() {
  // Fetch all groups from the server using the user's token
  const groupFromServer = await getAllGroups(getCookie("token", { cookies }));

  return (
    <div className="row"> {/* Display content in a row layout */}
      <GroupsList groupFromServer={groupFromServer} /> {/* Render GroupsList component with fetched group data */}

      {/* Uncomment the following lines to display posts and post groups:
      <MainPosts postsFromServer={postsFromServer} /> 
      <PostGroups /> */}
    </div>
  );
}

export default GroupsPage;
