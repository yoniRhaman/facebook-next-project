"use client";

import {
  ChatBubbleOutline,
  ShareOutlined,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import Link from "next/link";
import { posts } from "@/utils/data/posts";
import CreatePost from "../../createPost/createPost";
import "./mainPosts.css";
import { usePostContext } from "@/utils/contexts/postContext";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getUserData } from "@/utils/api/loginApi";
import { getCookie } from "cookies-next";
import { CircularProgress } from "@mui/material";
import Image from "next/image";

// const personalInformation = {
//   name: "moshe yakovson",
//   linkToPersonalFeed: "",
//   picture:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
// };

// export default function MainPosts() {
//   return (
//     <div className="posts-box">
//       <CreatePost />
//       {posts.map((post, index) => (
//         <PostItem key={index} post={post} />
//       ))}
//     </div>
//   );
// }

// function PostItem({ post }) {
//   return (
//     <div className="post-box ">
//       <div className="out-brief-introduction-box">
//         <Link href={personalInformation.linkToPersonalFeed}>
//           <div className="brief-introduction">
//             <img
//               className="avatar"
//               src={personalInformation.picture}
//               alt="Profile"
//             />
//             <div className="user-info">
//               <p className="user-name">{personalInformation.name}</p>
//               <p className="post-time">
//                 {post.postingDate} at {post.postingTime}
//               </p>
//             </div>
//           </div>
//         </Link>
//       </div>
//       <div className="post-content">
//         <div className="post-pictures">
//           {post.pictures.map((image, index) => (
//             <img
//               key={index}
//               className="post-picture"
//               src={post.pictures[index]}
//               width={`${100 / (1 + (post.pictures.length > 1))  - 3 }%`}
//               // height={`${100 / (1 + (post.pictures.length > 1))  - 3 }%`}
//               alt="Post"
//             />
//           ))}
//         </div>
//         <p className="post-text">{post.content}</p>
//       </div>
//       <div className="post-actions">
//         <button className="action-button">
//           <ThumbUpOffAlt />
//           <p>Like</p>
//         </button>
//         <button className="action-button">
//           <ChatBubbleOutline />
//           <p>Comment</p>
//         </button>
//         <button className="action-button">
//           <ShareOutlined />
//           <p>Share</p>
//         </button>
//       </div>
//       <div className="post-stats">
//         <p>{`${post.likes.length} Likes`}</p>
//         <p>{`${post.comments.length} Comments`}</p>
//       </div>
//     </div>
//   );
// }

export default function MainPosts({ postsFromServer }) {
  const { sharedPosts, setSharedPosts } = usePostContext([]);
  useEffect(() => {
    setSharedPosts(postsFromServer);
  }, []);
  return (
    <div className="posts-box">
      <CreatePost />
      {sharedPosts.map((post, index) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}

function PostItem({ post }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = getCookie("token");
        const u = await getUserData(token, post.owner);
        setUser(u);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);
  return (
    <div className="post-box ">
      <div className="out-brief-introduction-box">
        {!user ? (
          <CircularProgress />
        ) : (
          <>
          <p>{`${user.firstName} ${user.lastName}`}</p>
          <Image src={user.profileImg} alt="Profile Image" width={50} height={50} />
          <p>Privacy: {post.privacy}</p>
          <p>{post.content}</p>
          </>
        )}
        <p>{post.createdAt}</p>
        {post.images && post.images.length > 0 && (
          <div className="post-images row gap-20 ">
            {post.images.map((image, idx) => (
              <img
                className="post-img"
                key={nanoid()}
                src={image}
                alt={`Post image ${idx}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
