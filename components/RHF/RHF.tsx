import React from 'react';
import { useForm } from "react-hook-form";
import { IUser } from "../../models/IUser";
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

    const {register, handleSubmit, formState: {errors}, reset} = useForm<formValues>();

    function onSubmit(data:IUser){
        reset();
        addUser(data);
    }


    return(
        <>
            <h1 className={styles.h1}>React Hook Form</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First name </label>
                <input type="text" placeholder="First name" {...register("firstName")}></input> 

                <label htmlFor="lastName">Last name </label>
                <input type="text" placeholder="First name" {...register("lastName")}></input>

                <label htmlFor="phone">Phone </label>
                <input type="tel" placeholder="Phone" {...register("phone")}></input>

                <label htmlFor="email">Email </label>
                <input type="email" placeholder="Email" {...register("email")}></input>
            
                <input type="submit" value="Submit"></input>
            </form>
        </>
    );
}

export default RHF;