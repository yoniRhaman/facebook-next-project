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
import { format } from "date-fns";

export default function MainPosts({ postsFromServer }) {
  const { sharedPosts, setSharedPosts } = usePostContext([]);
  useEffect(() => {
    setSharedPosts(postsFromServer);
  }, []);
  return (
    <div className="posts-box">
      <CreatePost />
      {sharedPosts.slice().reverse().map((post, index) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}

function PostItem({ post }) {
  const [user, setUser] = useState(null);
  const postImgClassName = post.images.length > 1 ? "post-img" : "post-img-own";
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
    <div className="post-box  ">
      <div>
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
              <div className="date culomn">
                <p className="privacy-text">Privacy: {post.privacy}</p>
                <p> {format(new Date(post.createdAt), "hh:mm  dd-MM-yyyy")}</p>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
          </>
        )}

        {post.images && post.images.length > 0 && (
          <div className="post-images ">
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
