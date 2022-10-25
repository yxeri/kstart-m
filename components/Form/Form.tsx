import React, { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "../../models/IUser";
import { validateEmail } from "../ValidateEmail/ValidateEmail";
import { validatePhone } from "../ValidatePhone/ValidatePhone";
import styles from './Form.module.scss';


interface FormProps{
    addUser: (user:IUser) => void;
}

function Form({addUser}:FormProps){

    const [form, setForm] = useState<IUser>({firstName:'', lastName:'', phone:'', email:''});
    const [firstNameError, setFirstNameError] = useState<Boolean>(false);
    const [lastNameError, setLastNameError] = useState<Boolean>(false);
    const [phoneError, setPhoneError] = useState<Boolean>(false);
    const [emailError, setEmailError] = useState<Boolean>(false);


    function handleChange(e:ChangeEvent<HTMLInputElement>){

        setForm({...form, [e.target.name]: e.target.value});

        if(e.target.name === 'firstName' && e.target.value.length > 2){
            setFirstNameError(false);
        }

        if(e.target.name === 'lastName' && e.target.value.length > 2){
            setLastNameError(false);
        }

        if(e.target.name === 'phone' && validatePhone(e.target.value)){
            setPhoneError(false);
        }

        if(e.target.name === 'email' && validateEmail(e.target.value)){
            setEmailError(false);
        }
    }


    function validateNames(e:React.FocusEvent<HTMLInputElement>){

        //first name validation
        if(e.target.name == 'firstName' && e.target.value.length < 3){
            setFirstNameError(true);
        }
        if(e.target.name == 'firstName' && e.target.value.length > 2){
            setFirstNameError(false);
        }


        //last name validation
        if(e.target.name == 'lastName' && e.target.value.length < 3){
            setLastNameError(true);
        }
        if(e.target.name == 'lastName' && e.target.value.length > 2){
            setLastNameError(false);
        }
    }


    function validatePhoneNumber(e:React.FocusEvent<HTMLInputElement>){

        if( !validatePhone(e.target.value) ){
            setPhoneError(true);
        }
        else{
            setPhoneError(false);
        }
    }


    function validateEmailAddress(e:React.FocusEvent<HTMLInputElement>){

        if( !validateEmail(e.target.value) ){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
    }


    function handleSubmit(e:FormEvent){
        
        e.preventDefault();

        if(firstNameError === false && lastNameError === false){
            addUser(form);
            setForm({firstName:'', lastName:'', phone:'', email:''}); 
        }
        else{
            alert('Fill in all the required fields.');
        }
    }


    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input type="text" placeholder="First name" name="firstName" required value={form.firstName} onChange={handleChange} onBlur={validateNames}></input>
            {firstNameError && <p className={styles.error}>Please enter your first name.</p>}

            <label htmlFor="lastName">Last name</label>
            <input type="text" placeholder="Last name" name="lastName" required value={form.lastName} onChange={handleChange} onBlur={validateNames}></input>
            {lastNameError && <p className={styles.error}>Please enter your last name.</p>}

            <label htmlFor="phone">Phone</label>
            <input type="tel" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} onBlur={validatePhoneNumber}></input>
            {phoneError && <p className={styles.error}>Please enter a correct phone number.</p>}

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" required value={form.email} onChange={handleChange} onBlur={validateEmailAddress}></input>
            {emailError && <p className={styles.error}>Please enter a correct email address.</p>}
        
            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default Form;