
import {
  ChatBubbleOutline,
  ShareOutlined,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import Link from "next/link";
import { posts } from "@/utils/data/posts";
import CreatePost from "../../createPost/createPost";
import "./mainPosts.css";

const personalInformation = {
  name: "moshe yakovson",
  linkToPersonalFeed: "",
  picture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
};

export default function MainPosts() {
  return (
    <div className="posts-box">
      <CreatePost />
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
}

function PostItem({ post }) {
  return (
    <div className="post-box ">
      <div className="out-brief-introduction-box">
        <Link href={personalInformation.linkToPersonalFeed}>
          <div className="brief-introduction">
            <img
              className="avatar"
              src={personalInformation.picture}
              alt="Profile"
            />
            <div className="user-info">
              <p className="user-name">{personalInformation.name}</p>
              <p className="post-time">
                {post.postingDate} at {post.postingTime}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="post-content">
        <div className="post-pictures">
          {post.pictures.map((image, index) => (
            <img
              key={index}
              className="post-picture"
              src={post.pictures[index]}
              width={`${100 / (1 + (post.pictures.length > 1))  - 3 }%`}
              // height={`${100 / (1 + (post.pictures.length > 1))  - 3 }%`}
              alt="Post"
            />
          ))}
        </div>
        <p className="post-text">{post.content}</p>
      </div>
      <div className="post-actions">
        <button className="action-button">
          <ThumbUpOffAlt />
          <p>Like</p>
        </button>
        <button className="action-button">
          <ChatBubbleOutline />
          <p>Comment</p>
        </button>
        <button className="action-button">
          <ShareOutlined />
          <p>Share</p>
        </button>
      </div>
      <div className="post-stats">
        <p>{`${post.likes.length} Likes`}</p>
        <p>{`${post.comments.length} Comments`}</p>
      </div>
    </div>
  );
}
