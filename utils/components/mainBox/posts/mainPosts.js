import "./mainPosts.css";

const posts = [
    {
        title: "n cn n rn ",
        content: "jln j j",
        pictures:[
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
        pictures:[
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
        pictures:[
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

export default function MainPosts(){
    return(
        
       <div className="column posts-box">
            {posts.map((post) => (
                <PostItem  post={post} />
            ))}
       </div>
    );
}


function PostItem({post}){
    return (
        <div className="column post-box">
            <h1>{post.title}</h1>
            <hr/>
            {post.pictures.map((picture)=> (<img src={picture}></img>))}
            <p>{post.content}</p>
            <p>posted on {post.postingDate} at {post.postingTime}</p>


            
        </div>
    )
}





