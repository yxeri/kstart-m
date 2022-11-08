import { styled } from "@stitches/react";

type props = {
    logout: () => void;
}

export default function LoggedIn(props:props){

    const Div = styled('div', {
        borderRadius:10,
        textAlign:'center',
    });

    const P = styled('p', {
        color:'green'
    });

    const Button = styled('button', {
        width:'100%',
        height:39,
    
        backgroundColor:'white',
        borderRadius:10,
        cursor:'pointer'
    });

    return(
        <Div>
            <P>You are now logged in.</P>
            <Button onClick={props.logout}>Logout</Button>
        </Div>
    );
}