import React from "react";

interface props{
    h1:string;
    children:React.ReactNode;
}

export default function Section(props:props){

    return(
        <section>
            <h1>{props.h1}</h1>
            {props.children}
        </section>
    );
}