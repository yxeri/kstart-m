import { useRecoilState, useRecoilValue } from "recoil";
import { LoggedInUser } from "../../../atoms/LoggedInUser";
import { ShowCreateUserModal } from "../../../atoms/ShowCreateUserModal";
import { ShowLoginModal } from "../../../atoms/ShowLoginModal";
import { styled } from "../../../styles/stitches.config";
import CreateUserModal from "../CreateUserModal/CreateUserModal";
import LoginModal from "../LoginModal/LoginModal";


const Background = styled('div', {
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(0, 0, 0, 0.25)'
});


export default function Modal(){

    const [showCreateUserModal, setShowCreateUserModal] = useRecoilState(ShowCreateUserModal);
    const [showLoginModal, setShowLoginModal] = useRecoilState(ShowLoginModal);
    const loggedInUser = useRecoilValue(LoggedInUser);

    return(
        <>
            {(showCreateUserModal || showLoginModal) &&
                <Background>

                    {showCreateUserModal &&
                        <CreateUserModal closeModal={() => {setShowCreateUserModal(false)}}></CreateUserModal>
                    }
                    
                    {showLoginModal && !loggedInUser.token &&
                        <LoginModal closeModal={() => {setShowLoginModal(false)}} ></LoginModal>
                    }
                    
                </Background>
            }
        </>
    );
}