import { useState } from "react";
import { useRecoilState } from "recoil";
import { LoggedInUser } from "../atoms/LoggedInUser";
import { SelectedRoom } from "../atoms/SelectedRoom";
import Chat from "../components/Larp/Chat/Chat";
import CreateUserModal from "../components/Larp/CreateUserModal/CreateUserModal";
import LoggedIn from "../components/Larp/LoggedIn/LoggedIn";
import LoginModal from "../components/Larp/LoginModal/LoginModal";
import SelectRoom from "../components/Larp/SelectRoom/SelectRoom";
import { styled } from "../styles/stitches.config";


const Div = styled('div', {
    margin:'auto',
    width:'fit-content'
});

const Button = styled('button', {
    marginLeft:10,
    backgroundColor:'$primary',
    color:'$tertiary',
    border:'none',
    padding:10,
    borderRadius:10,
    cursor:'pointer',
    '&:hover':{backgroundColor:'$secondary'},
});

const Background = styled('div', {
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(0, 0, 0, 0.25)'
});

export default function Larp(){

    const [showCreateUserModal, setShowCreateUserModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [selectedRoom, setSelectedRoom] = useRecoilState(SelectedRoom);
    const [loggedInUser, setLoggedInUser] = useRecoilState(LoggedInUser);


    function logout(){
        setLoggedIn(false);
        setShowLoginModal(false);
        setSelectedRoom('');
        
        setLoggedInUser({
            token:'',
            userId:'',
            username:''
        });
    }


    return(
        <>
            {!loggedIn &&
                <Div>
                    <Button onClick={() => {setShowCreateUserModal(true)}}>Create User</Button>
                    <Button onClick={() => {setShowLoginModal(true)}}>Login</Button>
                </Div>     
            }
            

            {showCreateUserModal &&
                <Background>  
                    <CreateUserModal closeModal={() => {setShowCreateUserModal(false)}}></CreateUserModal>
                </Background>
            }

            {showLoginModal && !loggedIn &&
                <Background>
                    <LoginModal closeModal={() => {setShowLoginModal(false)}} setLoggedIn={(input) => {setLoggedIn(input)}}></LoginModal>
                </Background>
            }

            {loggedIn &&
                <>
                    <LoggedIn logout={logout}></LoggedIn>
                    <SelectRoom></SelectRoom>
                    <Chat></Chat>
                </>
            }
        </>
    );
}