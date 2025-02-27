import React from 'react';
import {IComment} from "@/app/Models/IComment";
import CommentsComponent from "@/app/components/comments/CommentsComponent";

const CommentPage = async () => {
    const comments:IComment[] = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentPage;