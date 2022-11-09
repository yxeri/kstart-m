import { useState } from "react";
import CreateUserModal from "../components/Larp/CreateUserModal/CreateUserModal";
import LoggedIn from "../components/Larp/LoggedIn/LoggedIn";
import LoginModal from "../components/Larp/LoginModal/LoginModal";
import Messages from "../components/Larp/Messages/Messages";
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
    const [userData, setUserData] = useState({token:'', userId:'', username:''});


    function logout(){
        setLoggedIn(false);
        setShowLoginModal(false);
        localStorage.removeItem('user');
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
                    <LoginModal closeModal={() => {setShowLoginModal(false)}} setLoggedIn={(input) => {setLoggedIn(input)}} setUserData={(token, userId, username) => {setUserData({token:token, userId:userId, username:username})}}></LoginModal>
                </Background>
            }

            {loggedIn &&
                <>
                    <LoggedIn userData={userData} logout={logout}></LoggedIn>

                    <Messages userData={userData}></Messages>
                </>
            }
        </>
    );
}