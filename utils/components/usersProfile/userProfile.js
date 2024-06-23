"use client";
import "./userProfile.css";
import { format } from "date-fns";

import {
  ChatBubbleOutline,
  ExpandMore,
  Message,
  PersonAddAlt,
  ShareOutlined,
  SystemSecurityUpdateWarningSharp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { addFreind } from "@/utils/api/freindsApi";
import { useRouter } from "next/navigation";
import { useChatContext } from "@/utils/contexts/ChatContext";
import { getCookie } from "cookies-next";
import { createNewChat } from "@/utils/api/chatApi";
import { getUserData } from "@/utils/api/loginApi";

export default function UserProfile({ userData }) {
  const [isFreind, setIsFreind] = useState(userData.isFreind);
  const [loading, setLoading] = useState(false);
  const { currentChat, setCurrentChat } = useChatContext();
  const { addChat } = useChatContext();
  const router = useRouter();
  const isUserIsDisplayed = userData.uid === userData.fid;

  async function addFreindLocaly() {
    try {
      await addFreind(userData.token, { uid: userData.uid, fid: userData.fid });
      setIsFreind(true);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  }

  const handleChat = async () => {
    try {
      setLoading(true);
      const token = getCookie("token");
      const uid = getCookie("uid");
      const json = {};
      json["owner"] = getCookie("uid");
      json["participants"] = [userData._id, json["owner"]];
      const chat = await createNewChat(json, token);
      if (chat.status === "notExisting") {
        addChat(chat.myChat);
        const u = await getUserData(
          token,
          chat.myChat.participants.filter((p) => p !== uid)[0],
        );
        setCurrentChat({ ...chat.myChat, user: u });
      } else if (chat.status === "existing") {
        const u = await getUserData(
          token,
          chat.myChat.participants.filter((p) => p !== uid)[0],
        );
        setCurrentChat({ ...chat.myChat, user: u });
      }
      router.push("/messages");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  let postsImages = userData.userPosts.reduce((images, post) => {
    return images.concat(post.images);
  }, []);

  return (
    <div className="profile-box">
      <img className="background-picture" src={userData.baverImg}></img>
      <div className="information-box row">
        <img className="profile-picture" src={userData.profileImg}></img>
        <div className="personal-information column">
          <h1 className="name-and-freinds">{`${userData.firstName}  ${userData.lastName} ${isUserIsDisplayed ? '(you)' : ''}`}</h1>
          {!isUserIsDisplayed && (
            <div>
            <p className="name-and-freinds">{`${userData.freinds.length} mutual freinds`}</p>
            <div className="mutual-freinds-pictures">
              {userData.freindsPictures.map((freind) => (
                <ListOfFreindsPictures freind={freind} />
              ))}
            </div>
          </div>)}
        </div>

        {!isUserIsDisplayed && (
          <div className="out-buttons-box row">
            <button
              className="invite-button center"
              variant="outlined"
              onClick={addFreindLocaly}
            >
              {!isFreind ? (
                <PersonAddAlt className="add-freind-request" />
              ) : (
                <p className="center">you are a friend</p>
              )}
            </button>
            {loading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              <button
                className="invite-button center"
                variant="contained"
                size="small"
                onClick={handleChat}
              >
                <Message className="message-button" />
              </button>
            )}

            <button className="expnd-more-button center" size="small">
              <ExpandMore />
            </button>
          </div>
        )}
      </div>

      <div className="rhight-nav">
        <Button>Posts</Button>
        <Button>About</Button>
        <Button>Freinds</Button>
        <Button>Photos</Button>
        <Button>Videos</Button>
        <Button>Check-ins</Button>
        <Button>More</Button>
        <Button className="expand-more-button-three-points" size="small">
          . . .
        </Button>
      </div>

      <div className="user-posts">
        <div className="nine-pictures-and-freinds">
          <p>Images</p>
          <div className="nine-pictures">
            {postsImages.slice(0, 9).map((picture, index) => (
              <DisplayNinePictures picture={picture} link={"/"} />
            ))}
          </div>
          <p>Friends</p>
          <div className="nine-pictures">
            {userData.freindsPictures.slice(0, 9).map((friend, index) => (
              <DisplayNinePictures picture={friend.profileImg} link={friend._id} />
            ))}
          </div>
        </div>
        <div className="user-posts-box">
          {userData.userPosts.map((post) => (
            <PostItem
              post={post}
              firstName={userData.firstName}
              lastName={userData.lastName}
              profileImg={userData.profileImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ListOfFreindsPictures({ freind }) {
  return (
    <Link href={`/profile/${freind._id}`}>
      <img className="mutual-freind-picture" src={freind.profileImg} />
    </Link>
  );
}

function DisplayNinePictures({ picture, link }) {
  return (
    <button>
      <Link href={link}>
        {" "}
        <img src={picture} />
      </Link>
    </button>
  );
}

function PostItem({ post, firstName, lastName, profileImg }) {
  const createdAt = post.createdAt ? new Date(post.createdAt) : new Date();
  const formattedDateTime = format(createdAt, "HH:mm MM/dd/yyyy");
  return (
    <div className="user-post-box">
      <div className="out-user-top-post-box">
        <div className="user-top-post-box">
          <Link href={`/profile/${post.owner}`}>
            <div className="user-brief-introduction">
              <img className="avatar" src={profileImg}></img>
              <p>
                {firstName} {lastName}
              </p>
            </div>
          </Link>
        </div>
        <p>{formattedDateTime}</p>
      </div>
      <div className="user-post-picture">
        {post.images.map((img) => (
          <img className="user-post-picture" src={img}></img>
        ))}
      </div>
      <div className="user-post-content">
        <p>{post.content}</p>
      </div>
      <div className="user-comments">
        <button className="user-comments-button">
          {/* <p> {`${post.comments.length} comments`}</p> */}
        </button>
        <div>
          <button className="user-comments-button">
            {/* <p>{`${post.likes.length - 1} + ${post.likes[0].typeOfLike}`}</p> */}
          </button>
        </div>
      </div>
      <div className="user-comments">
        <button className="row center user-comments-button">
          <ThumbUpOffAlt />
          <p>Like</p>
        </button>
        <button className="row center user-comments-button">
          <ChatBubbleOutline />
          <p>Comments</p>
        </button>
        <button className="row center user-comments-button">
          <ShareOutlined />
          <p>Share</p>
        </button>
      </div>
    </div>
  );
}
