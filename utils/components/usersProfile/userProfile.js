"use client";
import "./userProfile.css";
import { format } from "date-fns";
import { ExpandMore, Message, PersonAddAlt } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { addFreind } from "@/utils/api/freindsApi";
import { useRouter } from "next/navigation";
import { useChatContext } from "@/utils/contexts/ChatContext";
import { getCookie } from "cookies-next";
import { createNewChat } from "@/utils/api/chatApi";
import { getUserData } from "@/utils/api/loginApi";
import { nanoid } from "nanoid";

// Main component for displaying user profile
export default function UserProfile({ userData }) {
  const [isFreind, setIsFreind] = useState(userData.isFreind);
  const [loading, setLoading] = useState(false);
  const { currentChat, setCurrentChat } = useChatContext();
  const { addChat } = useChatContext();
  const router = useRouter();
  const isUserIsDisplayed = userData.uid === userData.fid;

  // Function to add friend locally
  async function addFreindLocaly() {
    try {
      await addFreind(userData.token, { uid: userData.uid, fid: userData.fid });
      setIsFreind(true);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  }

  // Function to handle chat initiation
  const handleChat = async () => {
    try {
      setLoading(true);
      const token = getCookie("token");
      const uid = getCookie("uid");
      const json = { owner: uid, participants: [userData._id, uid] };
      const chat = await createNewChat(json, token);

      // Check if chat is new or existing
      if (chat.status === "notExisting") {
        addChat(chat.myChat);
        const user = await getUserData(token, chat.myChat.participants.filter(p => p !== uid)[0]);
        setCurrentChat({ ...chat.myChat, user });
      } else if (chat.status === "existing") {
        const user = await getUserData(token, chat.myChat.participants.filter(p => p !== uid)[0]);
        setCurrentChat({ ...chat.myChat, user });
      }

      router.push("/messages");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Combine all post images into a single array
  let postsImages = userData.userPosts.reduce((images, post) => {
    return images.concat(post.images);
  }, []);

  return (
    <div className="profile-box">
      <img className="background-picture" src={userData.baverImg} alt="Background" />
      <div className="information-box row">
        <img className="profile-picture" src={userData.profileImg} alt="Profile" />
        <div className="personal-information">
          <h1 className="name-and-freinds">
            {`${userData.firstName} ${userData.lastName} ${isUserIsDisplayed ? "(you)" : ""}`}
          </h1>
          {!isUserIsDisplayed && (
            <div>
              <p className="name-and-freinds">{`${userData.commoFreindsPictures.length} mutual friends`}</p>
              <div className="mutual-freinds-pictures">
                {userData.commoFreindsPictures.map(freind => (
                  <ListOfFreindsPictures key={nanoid()} freind={freind} />
                ))}
              </div>
            </div>
          )}
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

      <br />

      <div className="user-posts">
        <div className="nine-pictures-and-freinds column">
          <div className="pictures">
            <p>Images</p>
            <div className="nine-pictures">
              {postsImages.slice(0, 9).map((picture, index) => (
                <DisplayNinePictures key={nanoid()} picture={picture} link={""} />
              ))}
            </div>
          </div>
          <div className="friends">
            <p>Friends</p>
            <div className="nine-pictures">
              {userData.freindsPictures.slice(0, 9).map((friend, index) => (
                <DisplayNinePictures
                  key={nanoid()}
                  picture={friend.profileImg}
                  link={friend._id}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="user-posts-box">
          {userData.userPosts.slice().reverse().map(post => (
            <PostItem
              key={nanoid()}
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

// Component to display mutual friends' pictures
function ListOfFreindsPictures({ freind }) {
  return (
    <Link href={`/profile/${freind._id}`}>
      <img
        className="mutual-freind-picture"
        src={freind.profileImg}
        alt="Friend"
      />
    </Link>
  );
}

// Component to display a set of nine pictures
function DisplayNinePictures({ picture, link }) {
  return (
    <button>
      <Link href={link}>
        <img src={picture} alt="Display" />
      </Link>
    </button>
  );
}

// Component to display individual posts
function PostItem({ post, firstName, lastName, profileImg }) {
  const createdAt = post.createdAt ? new Date(post.createdAt) : new Date();
  const formattedDateTime = format(createdAt, "HH:mm MM/dd/yyyy");
  const pictureClassName = post.images.length > 1 ? "picture" : "picture-own";

  return (
    <div className="user-post-box">
      <div className="out-user-top-post-box">
        <div className="user-top-post-box">
          <Link href={`/profile/${post.owner}`}>
            <div className="user-brief-introduction">
              <img className="avatar" src={profileImg} alt="Avatar" />
              <p>{`${firstName} ${lastName}`}</p>
            </div>
          </Link>
        </div>

        <p className="date">{formattedDateTime}</p>
      </div>

      <div className="post-pictures">
        {post.images.map(img => (
          <img className={pictureClassName} src={img} alt="Post" />
        ))}
      </div>
      <div className="user-post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
