import { displayedUserInformation, nineFreindsPictures, pictures, userPosts } from "@/utils/data/displayedUserInformation";
import "./userProfile.css";

import { ArrowDropDownSharp, ChatBubbleOutline, ExpandMore, Message, PersonAddAlt, ShareOutlined, ThumbUpOffAlt } from "@mui/icons-material";


import { Button } from "@mui/material";
import Link from "next/link";


export default function UserProfile() {
     return (
        <div className="profile-box">
            <div className="inner-profile-box">
                <img
                    className="background-picture"
                    src={displayedUserInformation.mainPicture}
                ></img>
                <div className="information-box">
                    <img
                        className="profile-picture"
                        src={displayedUserInformation.profilePicture}
                    ></img>
                    <div className="personal-information">
                        <h1 className="name-and-freinds">{`${displayedUserInformation.firstName}  ${displayedUserInformation.lastName}`}</h1>
                        <p className="name-and-freinds" >{`${displayedUserInformation.numberOfMutualFreinds} mutual freinds`}</p>
                        <div className="mutual-freinds-pictures">
                            {displayedUserInformation.mutualFreinds.map((freind) => (
                                <ListOfFreindsPictures freind={freind} />
                            ))}

                        </div>
                    </div>
                    <div className="out-buttons-box">
                        <div className="buttons">
                            <button className="invite-button" variant="outlined" size="small">
                                <PersonAddAlt className="add-freind-request"/>
                                freinds
                            </button>

                            <button
                                className="invite-button"
                                variant="contained"
                                size="small"
                            >
                                <Message className="message-button" />
                                messaage
                            </button>
                        </div>
                        <button className="expnd-more-button" size="small">
                            <ExpandMore />
                        </button>
                    </div>
                </div>





                <div className="profile-nav">
                    <nav className="rhight-nav">
                        <Button>Posts</Button>
                        <Button>About</Button>
                        <Button>Freinds</Button>
                        <Button>Photos</Button>
                        <Button>Videos</Button>
                        <Button>Check-ins</Button>
                        <Button>
                            More <ArrowDropDownSharp />
                        </Button>
                    </nav>
                    <Button className="expand-more-button-three-points" size="small">
                        . . .
                    </Button>
                </div>

            </div>



            <div className="user-posts">

                <div className="nine-pictures-and-freinds">
                    <div className="nine-pictures">
                        {pictures.slice(0, 9).map((picture, index) => (
                            <DisplayNinePictures picture={picture}/>
                        ))}
                    </div>

                    <div className="nine-pictures">
                        {nineFreindsPictures.map((picture, index) => (
                            <DisplayNinePictures picture={picture.ProfilePicture} />
                        ))}
                    </div>
                </div>
                <div className="user-posts-box">

                    {userPosts.map((post) => (
                        <PostItem post={post} />
                    ))}
                </div>
            </div>
        </div>
    );

}

function ListOfFreindsPictures({ freind }) {
    return <img className="mutual-freind-picture" src={freind.ProfilePicture} />;
}


function DisplayNinePictures({ picture }) {
    return (
        <button> <img src={picture} /></button>

    )
}


function PostItem({ post }) {
    return (
        <div className="user-post-box">
            <div className="user-top-post-box" >
                <Link href={displayedUserInformation.linkToPersonalFeed} >

                    <div className="user-brief-introduction">
                        <img className="avatar" src={displayedUserInformation.profilePicture}></img>
                        <p>{displayedUserInformation.firstName}</p>
                    </div>

                </Link>
            </div>
            <h1>{post.title}</h1>
            <div className="user-post-picture">

                {post.pictures.map((picture) => (
                    <img className="user-post-picture" src={picture}></img>
                ))}
            </div>
            <div className="user-post-content">
                <p>{post.content}</p>
            </div>
            <div className="user-comments">
                <button className="user-comments-button">
                    <p> {`${post.comments.length} comments`}</p>
                </button>
                <div>
                    <button className="user-comments-button">
                        <p>{`${post.likes.length - 1} + ${post.likes[0].typeOfLike}`}</p>
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



