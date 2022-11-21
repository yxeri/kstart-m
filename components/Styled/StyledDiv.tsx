import React from "react";
import { styled } from "../../styles/stitches.config";

const Div = styled('div', {
    color:'red'
});

interface props{
    children:React.ReactNode;
}

export default function StyledDiv(props:props){

    return(
        <Div>
            {props.children}
        </Div>
    );
}