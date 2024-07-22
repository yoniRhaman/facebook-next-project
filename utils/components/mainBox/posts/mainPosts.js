"use client";

import {
  ChatBubbleOutline,
  ShareOutlined,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import Link from "next/link";
import CreatePost from "../../createPost/createPost";
import "./mainPosts.css";
import { usePostContext } from "@/utils/contexts/postContext";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getUserData } from "@/utils/api/loginApi";
import { getCookie } from "cookies-next";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";

// MainPosts Component
export default function MainPosts({ postsFromServer }) {
  // Extract sharedPosts and setSharedPosts from context
  const { sharedPosts, setSharedPosts } = usePostContext([]);

  // Initialize sharedPosts with postsFromServer on component mount
  useEffect(() => {
    setSharedPosts(postsFromServer);
  }, [postsFromServer, setSharedPosts]);

  return (
    <div className="posts-box">
      {/* Render CreatePost component to allow users to create new posts */}
      <CreatePost />
      {/* Render each post item in reverse order */}
      {sharedPosts.slice().reverse().map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}

// PostItem Component
function PostItem({ post }) {
  const [user, setUser] = useState(null);

  // Determine CSS class for images based on the number of images in the post
  const postImgClassName = post.images.length > 1 ? "post-img" : "post-img-own";

  // Fetch user data when the component mounts
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = getCookie("token");
        const u = await getUserData(token, post.owner);
        setUser(u);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUser();
  }, [post.owner]);

  return (
    <div className="post-box">
      <div>
        {/* Display a loading spinner while user data is being fetched */}
        {!user ? (
          <CircularProgress />
        ) : (
          <>
            <div className="row post-details">
              <div className="row profile-details">
                <Image
                  src={user.profileImg}
                  alt="Profile Image"
                  width={50}
                  height={50}
                />
                <p>{`${user.firstName} ${user.lastName}`}</p>
              </div>
              <div className="date column">
                <p className="privacy-text">Privacy: {post.privacy}</p>
                <p>{format(new Date(post.createdAt), "hh:mm dd-MM-yyyy")}</p>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
          </>
        )}

        {/* Render post images if they exist */}
        {post.images && post.images.length > 0 && (
          <div className="post-images">
            {post.images.map((image, idx) => (
              <img
                className={postImgClassName}
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
