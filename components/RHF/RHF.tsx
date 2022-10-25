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

    const {register, handleSubmit, formState: {errors}, reset} = useForm<formValues>({mode: 'onTouched'});

    function onSubmit(data:IUser){
        addUser(data);
        reset();
    }

    
    function validatePhone(phone:string){

        const correctChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '+', '-'];
        const phoneArr = phone.split('');

        let check = false;

        for(let i = 0; i < phoneArr.length; i++){

            for(let j = 0; j < correctChars.length; j++){

                if(phoneArr[i] === correctChars[j]){
                    check = true;
                }
            }

            if(check === false){
                return false;
            }
            else{
                check = false;
            }
        }

        return true;
    }
    

    function validateEmail(email:string){
    // eslint-disable-next-line no-useless-escape
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };


    return(
        <>
            <h1 className={styles.h1}>React Hook Form</h1>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First name </label>
                <input type="text" placeholder="First name" {...register("firstName", {required: true, minLength: 2})}></input> 
                {errors.firstName && <p className={styles.error}>Please enter your first name.</p>}

                <label htmlFor="lastName">Last name </label>
                <input type="text" placeholder="First name" {...register("lastName", {required: true, minLength: 2})}></input>
                {errors.lastName && <p className={styles.error}>Please enter your last name.</p>}

                <label htmlFor="phone">Phone </label>
                <input type="tel" placeholder="Phone" {...register("phone", {validate: validatePhone})}></input>
                {errors.phone && <p className={styles.error}>Please enter a valid phone number.</p>}

                <label htmlFor="email">Email </label>
                <input type="email" placeholder="Email" {...register("email", {required: true, validate: validateEmail})}></input>
                {errors.email && <p className={styles.error}>Please enter a valid email adress.</p>}
            
                <input type="submit" value="Submit"></input>
            </form>
        </>
    );
}

export default RHF;