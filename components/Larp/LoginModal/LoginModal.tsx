import { FormProvider, useForm } from "react-hook-form";
import { LarpUser } from "../../../models/LarpUser";
import Input from "../Input/Input";
import axios from "axios";
import { styled } from "@stitches/react";
import { useState } from "react";
import LoggedIn from "./LoggedIn";
import colors from "../../../variables/colors";

type props = {
    closeModal: () => void;
}

const Modal = styled('div', {
    position:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%, -50%)',

    minWidth:306,
    boxSizing:'border-box',

    color:colors.tertiary,
    backgroundColor:colors.primary,
    padding:20,
    borderRadius:10,
    boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.25)'
});

const H2 = styled('h2', {
    textAlign:'center',
});

const Exit = styled('button', {
    position:'absolute',
    top:10,
    right:10,

    backgroundColor:colors.primary,
    color:colors.tertiary,
    border:`1px solid ${colors.tertiary}`,
    borderRadius:'5px',
    cursor:'pointer',

    '&:hover':{backgroundColor:colors.secondary}
});

const Button = styled('button', {
    width:'100%',
    height:39,

    backgroundColor:colors.primary,
    color:colors.tertiary,
    border:`1px solid ${colors.tertiary}`,
    borderRadius:10,
    cursor:'pointer',

    '&:hover':{backgroundColor:colors.secondary}
});

const Error = styled('p', {
    color:'red'
});


export default function LoginModal(props:props){

    const methods = useForm<LarpUser>({mode: 'onTouched'});
    const [status, setStatus] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);


    async function onSubmit(data:LarpUser){

        let res = await axios.post('http://localhost:3000/api/larp/authenticate', {

            username: data.username,
            password: data.password
        });

        console.log(res);


        if(res.data.data && res.data.data.token){
            setLoggedIn(true);
            methods.reset();
        }
        else{
            setStatus(res.data);
        }
    }

    return(
        <Modal>
            {loggedIn === false && <>

                <H2>Login</H2>
                <Exit onClick={() => {props.closeModal()}}>X</Exit>

                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Input name="username" label="User name" type="text" minLength={1} errorMsg="Please enter your username."></Input>
                        <Input name="password" label="Password" type="password" minLength={1} errorMsg="Please enter your password."></Input>

                        <Button type="submit">Login</Button>
                    </form>
                </FormProvider>

                {status === 401 && <Error>Incorrect password.</Error>}
                {status === 404 && <Error>User doesn't exist.</Error>}
                {status === 500 && <Error>Server is down.</Error>}
            </>}

            {loggedIn && <LoggedIn logout={() => {setLoggedIn(false);}}></LoggedIn>}
        </Modal>
    );
}