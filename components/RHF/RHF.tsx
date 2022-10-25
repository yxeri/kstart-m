import React from 'react';
import { useForm } from "react-hook-form";
import { IUser } from "../../models/IUser";
import { validateEmail } from '../ValidateEmail/ValidateEmail';
import { validatePhone } from '../ValidatePhone/ValidatePhone';
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
        <>
            <h1 className={styles.h1}>React Hook Form</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First name</label>
                <input type="text" placeholder="First name" {...register("firstName", {required: true, minLength: 3})}></input> 
                {errors.firstName && <p className={styles.error}>Please enter your first name.</p>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" placeholder="First name" {...register("lastName", {required: true, minLength: 3})}></input>
                {errors.lastName && <p className={styles.error}>Please enter your last name.</p>}

                <label htmlFor="phone">Phone</label>
                <input type="tel" placeholder="Phone" {...register("phone", {validate: validatePhone})}></input>
                {errors.phone && <p className={styles.error}>Please enter a valid phone number.</p>}

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" {...register("email", {required: true, validate: validateEmail})}></input>
                {errors.email && <p className={styles.error}>Please enter a valid email adress.</p>}
            
                <input type="submit" value="Submit"></input>
            </form>
        </>
    );
}

export default RHF;