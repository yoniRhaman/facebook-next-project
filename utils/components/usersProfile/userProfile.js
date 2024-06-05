"use client"
import {
  displayedUserInformation,
  nineFreindsPictures,
  pictures,
  userPosts,
} from "@/utils/data/displayedUserInformation";
import "./userProfile.css";
import { format } from 'date-fns';

import {
  ArrowDropDownSharp,
  ChatBubbleOutline,
  ExpandMore,
  Message,
  PersonAddAlt,
  ShareOutlined,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { addFreind } from "@/utils/api/freindsApi";




export default function UserProfile({ userData }) {
  const [isFreind, setIsFreind] = useState(userData.isFreind);




  async function addFreindLocaly() {
    try {
      await addFreind(userData.token, { uid: userData.uid, fid: userData.fid });
      setIsFreind(true);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  }


  return (
    <div className="profile-box">
      <div className="inner-profile-box">
        <img
          className="background-picture"
          src={userData.baverImg}
        ></img>
        <div className="information-box">
          <img
            className="profile-picture"
            src={userData.profileImg}
          ></img>
          <div className="personal-information">
            <h1 className="name-and-freinds">{`${userData.firstName}  ${userData.lastName}`}</h1>
            <p className="name-and-freinds">{`${userData.freinds.length} mutual freinds`}</p>
            <div className="mutual-freinds-pictures">
              {
                userData.freindsPictures.map((freind) => (

                  <ListOfFreindsPictures freind={freind} />
                ))}
            </div>
          </div>
          <div className="out-buttons-box">
            <div className="buttons">
              <button className="invite-button" variant="outlined" onClick={addFreindLocaly}>
                {!isFreind ? <PersonAddAlt className="add-freind-request" /> : <p>you are a friend</p>}
              </button>

              <button
                className="invite-button"
                variant="contained"
                size="small"
              >
                <Message className="message-button" />
              </button>
            </div>
            <button className="expnd-more-button" size="small">
              <ExpandMore />
            </button>
          </div>
        </div>

        <div className="profile-nav">
          <div className="rhight-nav">
            <Button>Posts</Button>
            <Button>About</Button>
            <Button>Freinds</Button>
            <Button>Photos</Button>
            <Button>Videos</Button>
            <Button>Check-ins</Button>
            <Button>
              More <ArrowDropDownSharp />
            </Button>
          </div>
          <Button className="expand-more-button-three-points" size="small">
            . . .
          </Button>
        </div>
      </div>

      <div className="user-posts">
        <div className="nine-pictures-and-freinds">
          <div className="nine-pictures">
            {pictures.slice(0, 9).map((picture, index) => (
              <DisplayNinePictures picture={picture} />
            ))}
          </div>

          <div className="nine-pictures">
            {nineFreindsPictures.map((picture, index) => (
              <DisplayNinePictures picture={picture.ProfilePicture} />
            ))}
          </div>
        </div>
        <div className="user-posts-box">
          {userData.userPosts.map((post) => (
            <PostItem post={post} firstName={userData.firstName} lastName={userData.lastName} profileImg={userData.profileImg} />
          ))
          }
        </div>
      </div>
    </div>
  );
}

function ListOfFreindsPictures({ freind }) {

  return (
    <Link href={`/profile/${freind._id}`}>
      <img className="mutual-freind-picture" src={freind.baverImg} />
    </Link>
  );
}

function DisplayNinePictures({ picture }) {
  return (
    <button>
      {" "}
      <img src={picture} />
    </button>
  );
}

function PostItem({ post, firstName, lastName, profileImg }) {
  const formattedDateTime = format(new Date(post.createdAt), 'HH:mm MM/dd/yyyy');
  return (
    <div className="user-post-box">
      <div className="out-user-top-post-box">
        <div className="user-top-post-box">
          <Link href={`/profile/${post.owner}`}>
            <div className="user-brief-introduction">
              <img
                className="avatar"
                src={profileImg}
              ></img>
              <p>{firstName}  {lastName}</p>
            </div >
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
