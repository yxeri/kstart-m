import axios from "axios";
import { styled } from "../../../styles/stitches.config";

type props = {
    logout: () => void;
    userData:{
        token:string;
        userId:string;
    };
}



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
    marginBottom:10,

    backgroundColor:'$primary',
    color:'$tertiary',
    border:`1px solid $tertiary`,
    borderRadius:10,
    cursor:'pointer',

    '&:hover':{backgroundColor:'$secondary'}
});



export default function LoggedIn(props:props){

    function deleteUser(){
        axios.post('http://localhost:3000/api/larp/deleteUser', {
            token: props.userData.token,
            userId: props.userData.userId
        });
    }

    return(
        <Div>
            <P>You are now logged in.</P>
            <Button onClick={props.logout}>Logout</Button>
            <Button onClick={deleteUser}>Delete user</Button>
        </Div>
    );
}