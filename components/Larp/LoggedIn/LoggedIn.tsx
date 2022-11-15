import axios from "axios";
import { styled } from "../../../styles/stitches.config";

const Div = styled('div', {
    borderRadius:10,
    textAlign:'center',
});

const P = styled('p', {
    color:'$tertiary'
});

const Button = styled('button', {
    height:39,
    marginLeft:10,

    backgroundColor:'$primary',
    color:'$tertiary',
    border:`2px solid $tertiary`,
    borderRadius:10,
    cursor:'pointer',

    '&:hover':{backgroundColor:'$secondary'}
});


type props = {
    userData:{
        token:string;
        userId:string;
        username:string;
    };

    logout: () => void;
}


export default function LoggedIn(props:props){

    function deleteUser(){
        axios.post('http://localhost:3000/api/larp/deleteUser', {
            token: props.userData.token,
            userId: props.userData.userId
        });
    }

    return(
        <Div>
            <P>Welcome {props.userData.username}!</P>

            <Button onClick={deleteUser}>Delete user</Button>
            <Button onClick={props.logout}>Logout</Button>
        </Div>
    );
}