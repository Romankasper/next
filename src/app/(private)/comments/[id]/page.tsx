import React from 'react';
import {IComment} from "@/app/Models/IComment";
type Params={id:string}
const CommentPage = async ({params}:{params:Params}) => {
    const comment:IComment = await fetch('https://jsonplaceholder.typicode.com/comments/'+params.id)
        .then(value => value.json())
    return (
        <div>
            {
                comment.body
            }

        </div>
    );
};

export default CommentPage;