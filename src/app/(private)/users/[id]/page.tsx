import React from 'react';

type Params ={id:string}
const UserPage = async ({params}:{params:Params}) => {
    const user = await  fetch('https://jsonplaceholder.typicode.com/users/' +params.id)
        .then(value => value.json())
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default UserPage ;