import { ChatBubbleOutline, ThumbDown, ThumbDownAlt, ThumbDownOffAlt, ThumbUpOffAlt } from "@mui/icons-material";
import "./mainPosts.css";
import Link from 'next/link';

const posts = [
    {
        title: "n cn n rn ",
        content: "jln j j",
        pictures: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        ],
        postingDate: "12-03-2022",
        postingTime: "15:34",
        comments: [{
            name: "",
            title: "",
            content: "",
            picture: "",
            commentingDate: "",
            commentingTime: "",
        }]
    },
    {
        title: "n cn n rn ",
        content: "jln j j",
        pictures: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        ],
        postingDate: "12-03-2022",
        postingTime: "15:34",
        comments: [{
            name: "",
            title: "",
            content: "",
            picture: "",
            commentingDate: "",
            commentingTime: "",
        }]
    },
    {
        title: "n cn n rn ",
        content: "jln j j",
        pictures: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        ],
        postingDate: "12-03-2022",
        postingTime: "15:34",
        comments: [{
            name: "",
            title: "",
            content: "",
            picture: "",
            commentingDate: "",
            commentingTime: "",
        }]
    }
]

const personalInformation = {
    name: "moshe yakovson",
    linkToPersonalFeed: "",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
    dateOfacountCreation: "",
    timeOfCreation: "",
}

export default function MainPosts() {
    return (

        <div className="column posts-box">
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
                <Link href={personalInformation.linkToPersonalFeed}>
                    <div className="brief-introduction">
                        <p>{personalInformation.name}</p>
                        <img className="avatar" src={personalInformation.picture}></img>
                    </div>
                </Link>
            </div>
            <hr />
            <h1>{post.title}</h1>
            <div className="post-picture" >
                {post.pictures.map((picture) => (<img className="post-picture" src={picture}></img>))}
            </div>
            <hr />
            <div className="comments">
                <button className="comments-button">
                
                        <ChatBubbleOutline />
                        <p>comments</p>
                    
                </button>
                <div>
                    <ThumbUpOffAlt />
                    <ThumbDownOffAlt />
                </div>


            </div>

            <p>{post.content}</p>

            <p>posted on {post.postingDate} at {post.postingTime}</p>



        </div>
    )
}





