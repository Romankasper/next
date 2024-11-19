import React from "react";
import {Metadata} from "next";


export const metadata:Metadata ={
    title:'Userslayout metadata'
}
type Props ={children:React.ReactNode}
const Userslayout  =({children}:Props)=>{
    return(
        <>
            <div>users layout</div>
            {children}
        </>
    );
};

export default Userslayout ;
