import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoggedInUser } from "../../../atoms/LoggedInUser";
import { SelectedRoom } from "../../../atoms/SelectedRoom";
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


export default function LoggedIn(){

    const [selectedRoom, setSelectedRoom] = useRecoilState(SelectedRoom);
    const [loggedInUser, setLoggedInUser] = useRecoilState(LoggedInUser);

    function logout(){
        setSelectedRoom('');
    
        setLoggedInUser({
            token:'',
            userId:'',
            username:''
        });
    }

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
            <Button onClick={logout}>Logout</Button>
        </Div>
    );
}