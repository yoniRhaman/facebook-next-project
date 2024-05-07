import { BubbleChart, ChatBubbleOutline, ShareOutlined, ThumbDown, ThumbDownAlt, ThumbDownOffAlt, ThumbUpOffAlt } from "@mui/icons-material";
import "./mainPosts.css";
import Link from 'next/link';
import { ShareAltOutlined } from "@ant-design/icons";
import { posts } from "@/utils/data/posts";
import CreatePost from "../../createPost/createPost";







export default function MainPosts() {
    return (

        <div className="column posts-box">
            <CreatePost />
            {posts.map((post) => (
                <PostItem post={post} />
            ))}
        </div>
    );
}


function PostItem({ post }) {
    return (
        <div className="column post-box">
            <div className="out-brief-introduction-box">
                <Link href={post.personalInformation.linkToPersonalFeed}>
                    <div className="brief-introduction">
                        <p>{post.personalInformation.name}</p>
                        <img className="avatar" src={post.personalInformation.picture}></img>
                    </div>
                </Link>
            </div>
            <h1>{post.title}</h1>
            <div className="post-picture" >
                {post.pictures.map((picture) => (<img className="post-picture" src={picture}></img>))}
            </div>
            <div className="post-content"><p>{post.content}</p></div>
            <div className="comments">
                <button className="comments-button">
                    <p> {`${post.comments.length} comments`}</p>

                </button>
                <div>
                    <button className="comments-button"><p>{`${post.likes.length - 1} + ${post.likes[0].typeOfLike}`}</p></button>
                </div>


            </div>

            <div className="comments">
                <button className="row center comments-button"><ThumbUpOffAlt /><p>Like</p></button>
                <button className="row center comments-button"><ChatBubbleOutline /><p>Comments</p></button>
                <button className="row center comments-button"><ShareOutlined /><p>Share</p></button>
            </div>



            <p>posted on {post.postingDate} at {post.postingTime}</p>



        </div>
    )
}





