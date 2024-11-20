import React, {FC} from 'react';
import Link from "next/link";
import {IUser} from "@/app/Models/IUser";
type Props ={
    users:IUser[]
}
const UsersComponent:FC<Props>= ({users}) => {
    return (
        <div>
            {
                users.map(({id,name}:{id:number;name:string})=>(<div key={id}>
                    <Link href={'/users/'+id}>{name}</Link>
                </div>))
            }
        </div>
    );
};

export default UsersComponent;