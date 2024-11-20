import React, {FC} from 'react';
import {IComment} from "@/app/Models/IComment";
import Link from "next/link";
type Props ={
    comments:IComment[]
}
const CommentsComponent:FC<Props> = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment:IComment)=>(<div key={comment.id}>
                    <Link href={'/comments/'+comment.id}>{comment.name}</Link>
                </div>))
            }
        </div>
    );
};

export default CommentsComponent;