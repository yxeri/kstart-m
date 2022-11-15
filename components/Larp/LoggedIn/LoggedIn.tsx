import axios from "axios";
import { useRecoilValue } from "recoil";
import { LoggedInUser } from "../../../atoms/LoggedInUser";
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

    logout: () => void;
}


export default function LoggedIn(props:props){

    const loggedInUser = useRecoilValue(LoggedInUser);

    function deleteUser(){
        console.log(loggedInUser);
        
        axios.post('http://localhost:3000/api/larp/deleteUser', {
            token: loggedInUser.token,
            userId: loggedInUser.userId
        });
    }

    return(
        <Div>
            <P>Welcome! {loggedInUser.username}!</P>

            <Button onClick={deleteUser}>Delete user</Button>
            <Button onClick={props.logout}>Logout</Button>
        </Div>
    );
}