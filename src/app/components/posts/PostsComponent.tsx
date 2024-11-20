import React, {FC} from 'react';
import {IPosts} from "@/app/Models/IPosts";
import Link from "next/link";
type Props ={
    posts:IPosts[]
}
const PostsComponent:FC<Props> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post:IPosts)=>(<div key={post.id}>
                    <Link href={'/posts/'+post.id}>{post.title}</Link>
                </div>))
            }
        </div>
    );
};

export default PostsComponent;