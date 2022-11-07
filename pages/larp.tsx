import { styled } from "@stitches/react";
import { useState } from "react";
import Form from "../components/Larp/Form";

export default function Larp(){

    const [showModal, setShowModal] = useState(false);

    const Background = styled('div', {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'rgba(0, 0, 0, 0.25)'
    })

    const Modal = styled('div', {
        position:'absolute',
        left:'50%',
        top:'50%',
        transform:'translate(-50%, -50%)',

        backgroundColor:'white',
        padding:20,
        borderRadius:10
    });

    const Exit = styled('button', {
        position:'absolute',
        top:10,
        right:10
    });

    const H2 = styled('h2', {
        textAlign:'center',
    });


    return(
        <>
            <button onClick={() => {setShowModal(true)}}>Create User</button>

            {showModal &&

            <Background>
                <Modal>
                    <Exit onClick={() => {setShowModal(false)}}>X</Exit>

                    <H2>Create new user</H2>

                    <Form></Form>
                    
                </Modal>
            </Background>}
        </>
    );
}