import React from "react";
import { styled } from "../../styles/stitches.config";

const StyledDiv = styled('div', {

    variants:{
        color:{
            red:{
                color:'red'
            }
        }
    }
});

interface props{
    children:React.ReactNode;
    color:'red';
}


export default function Div(props:props){

    return(
        <StyledDiv color={props.color}>
            {props.children}
        </StyledDiv>
    );
}