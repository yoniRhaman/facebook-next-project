import "./mainPosts.css";

const posts = [
    {
        title: "",
        content: "",
        pictures:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
            ""
        ],
        postingDate: "",
        postingTime: "",
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
        
       <div className="column">
            {posts.map((post, sirialNumber) => (
                <PostItem  post={post} sirialNumber={sirialNumber} />
            ))}
       </div>
    );
}


function PostItem(post, sirialNumber){
    return (
        <div className="column post-box">
            <h1>{post.title}</h1>
            <hr/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s"></img>
            <p>{post.content}</p>


            
        </div>
    )
}

