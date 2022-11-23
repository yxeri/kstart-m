import React from "react";
import { styled } from "../../styles/stitches.config";

const StyledButton = styled('button',{

    padding:'10px',
    border:'2px solid black',
    borderRadius:'10px',
    cursor:'pointer',
    
    variants:{
        darkMode:{
            true:{
                backgroundColor:'white',
                color:'$tertiary'
            },

            false:{
                backgroundColor:'$primary',
                color:'$tertiary'
            }
        }
    }
});

type props = {
    children:React.ReactNode;
    onClick: () => void;
    darkMode:boolean;
}

export default function ThemeButton(props:props){

    return(
        <StyledButton darkMode={props.darkMode} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}