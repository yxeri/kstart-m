import React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { User } from "../../models/User";
import Input from './Input';
import styles from './RHF.module.scss';


type FormProps = {
    addUser: (user:User) => void;
}


function RHF({addUser}:FormProps){

    const methods = useForm<User>({mode: 'onTouched'});

    function onSubmit(data:User){
        addUser(data);
        methods.reset();
    }


    return(
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>

                <Input name="firstName" label="First name" type={'text'} req={true} minLength={3} errorMsg="Please enter your first name."></Input>
                <Input name="lastName" label="Last name" type={'text'} req={true} minLength={3} errorMsg="Please enter your last name."></Input>
                <Input name="phone" label="Phone number (optional)" type={'tel'} req={false} minLength={0} errorMsg="Please enter a correct phone number."></Input>
                <Input name="email" label="Email" type={'email'} req={true} minLength={0} errorMsg="Please enter your email address."></Input>

                <input type="submit" value="Submit"></input>
            </form>
        </FormProvider>
    );
}

export default RHF;