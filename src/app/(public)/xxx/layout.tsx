import React from "react";
import {Metadata} from "next";


export const metadata:Metadata ={
    title:'Publiclayout metadata'
}
type Props ={children:React.ReactNode}
const PublicLayout  =({children}:Props)=>{
    return(
        <>
            publicLayout
            {children}
        </>
    );
};

export default PublicLayout ;