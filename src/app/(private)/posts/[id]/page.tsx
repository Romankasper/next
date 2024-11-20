import React from 'react';
import {IPosts} from "@/app/Models/IPosts";
type Params ={id:string}

const PostPage = async ({params}:{params:Params}) => {
    const post:IPosts = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
        .then(value => value.json())
    return (
        <div>
            {
                post.body
            }
        </div>
    );
};

export default PostPage;