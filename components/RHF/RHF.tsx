import React from 'react';
import { useForm } from "react-hook-form";
import { IUser } from "../../models/IUser";
import Email from './components/Email';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import Phone from './components/Phone';
import styles from './RHF.module.scss';


interface IFormProps{
    addUser: (user:IUser) => void;
}

type formValues = {
    firstName:string;
    lastName:string;
    phone:string;
    email:string;
}

function RHF({addUser}:IFormProps){

    const {register, handleSubmit, formState: {errors}, reset} = useForm<formValues>({mode: 'onTouched'});

    function onSubmit(data:IUser){
        addUser(data);
        reset();
    }


    return(
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

            <FirstName register={register} errors={errors}></FirstName>
            <LastName register={register} errors={errors}></LastName>
            <Phone register={register} errors={errors}></Phone>
            <Email register={register} errors={errors}></Email>
            
            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default RHF;