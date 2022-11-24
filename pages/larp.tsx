import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoggedInUser } from "../atoms/LoggedInUser";
import { ShowCreateUserModal } from "../atoms/ShowCreateUserModal";
import { ShowLoginModal } from "../atoms/ShowLoginModal";
import Chat from "../components/Larp/Chat/Chat";
import LoggedIn from "../components/Larp/LoggedIn/LoggedIn";
import Modal from "../components/Larp/Modal/Modal";
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



export default function Larp(){

    const [showCreateUserModal, setShowCreateUserModal] = useRecoilState(ShowCreateUserModal);
    const [showLoginModal, setShowLoginModal] = useRecoilState(ShowLoginModal);
    const loggedInUser = useRecoilValue(LoggedInUser);

    return(
        <>
            {!loggedInUser.token &&
                <Div>
                    <Button onClick={() => {setShowCreateUserModal(true)}}>Create User</Button>
                    <Button onClick={() => {setShowLoginModal(true)}}>Login</Button>
                </Div>     
            }
            
            <Modal></Modal>

            {loggedInUser.token &&
                <>
                    <LoggedIn></LoggedIn>
                    <SelectRoom></SelectRoom>
                    <Chat></Chat>
                </>
            }
        </>
    );
}