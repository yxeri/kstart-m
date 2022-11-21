import { styled } from "../../styles/stitches.config";

const Button = styled('button',{

    padding:'10px',
    border:'2px solid black',
    borderRadius:'10px',
    
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

type props ={
    variant:boolean;
    onClick:() => void;
    text:string;
}

export default function StyledButton(props:props){

    return(
        <Button darkMode={props.variant} onClick={props.onClick}>
            {props.text}
        </Button>
    );
}