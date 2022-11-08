import { styled } from "@stitches/react";
import { useState } from "react";
import CreateUserModal from "../components/Larp/CreateUserModal/CreateUserModal";
import LoginModal from "../components/Larp/LoginModal/LoginModal";

export default function Larp(){

    const [showCreateUserModal, setShowCreateUserModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const Div = styled('div', {
        margin:'auto',
        width:'fit-content'
    });

    const Button = styled('button', {
        marginLeft:10,
        backgroundColor:'#003e85',
        color:'white',
        border:'none',
        padding:10,
        borderRadius:10,
        cursor:'pointer',
        '&:hover':{backgroundColor:'#0052b1'},
    });

    const Background = styled('div', {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'rgba(0, 0, 0, 0.25)'
    })



    return(
        <>
            <Div>
                <Button onClick={() => {setShowCreateUserModal(true)}}>Create User</Button>
                <Button onClick={() => {setShowLoginModal(true)}}>Login</Button>
            </Div>

            {showCreateUserModal &&
            <Background>  
                <CreateUserModal closeModal={() => {setShowCreateUserModal(false)}}></CreateUserModal>
            </Background>}

            {showLoginModal &&
            <Background>
                <LoginModal closeModal={() => {setShowLoginModal(false)}}></LoginModal>
            </Background>
            }
        </>
    );
}