import React from 'react';
import UsersComponent from "@/app/components/users/UsersComponent";
import {IUser} from "@/app/Models/IUser";

const Userspage = async () => {
    const users:IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default Userspage;