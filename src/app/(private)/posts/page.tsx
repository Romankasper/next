import React from 'react';
import {IPosts} from "@/app/Models/IPosts";
import PostsComponent from "@/app/components/posts/PostsComponent";




const PostsPage = async () => {
    const posts:IPosts[] =await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
  

    return (

        <div>
<PostsComponent posts={posts}/>
            
        </div>
    );
};

export default PostsPage;