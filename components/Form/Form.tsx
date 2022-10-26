import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../models/User";
import { validateEmail } from "../ValidateEmail/ValidateEmail";
import { validatePhone } from "../ValidatePhone/ValidatePhone";
import Input from "./Input";
import styles from './Form.module.scss';


interface FormProps{
    addUser: (user:User) => void;
}

interface InputWasTouched{
    firstName:boolean;
    lastName:boolean;
    phone:boolean;
    email:boolean;
}

function Form({addUser}:FormProps){

    const [form, setForm] = useState<User>({firstName:'', lastName:'', phone:'', email:''});
    const [firstNameError, setFirstNameError] = useState<boolean>(false);
    const [lastNameError, setLastNameError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [inputWasTouched, setInputWasTouched] = useState<InputWasTouched>({firstName: false, lastName: false, phone: false, email: false});


    function handleChange(e:ChangeEvent<HTMLInputElement>){

        setForm({...form, [e.target.name]: e.target.value});


        //lyckades inte komma åt inputWasTouched dynamiskt.

        if(e.target.name === 'firstName' && inputWasTouched.firstName === true){
            validateNames(e);
        }

        if(e.target.name === 'lastName' && inputWasTouched.lastName === true){
            validateNames(e);
        }

        if(e.target.name === 'phone' && inputWasTouched.phone === true){
            validatePhoneNumber(e);
        }

        if(e.target.name === 'email' && inputWasTouched.email === true){
            validateEmailAddress(e);
        }
    }


    function handleOnBlur(e:React.FocusEvent<HTMLInputElement>){

        if(e.target.name === 'firstName'){
            
            setInputWasTouched({...inputWasTouched, firstName:true});
            validateNames(e);
        }

        if(e.target.name === 'lastName'){
            
            setInputWasTouched({...inputWasTouched, lastName:true});
            validateNames(e);
        }

        if(e.target.name === 'phone'){
            
            setInputWasTouched({...inputWasTouched, phone:true});
            validatePhoneNumber(e);
        }

        if(e.target.name === 'email'){
            
            setInputWasTouched({...inputWasTouched, email:true});
            validateEmailAddress(e);
        }
    }


    function validateNames(e:React.FocusEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>){

        if(e.target.name == 'firstName' && e.target.value.length < 3){
            setFirstNameError(true);
        }
        else{
            setFirstNameError(false);
        }


        if(e.target.name == 'lastName' && e.target.value.length < 3){
            setLastNameError(true);
        }
        else{
            setLastNameError(false);
        }
    }


    function validatePhoneNumber(e:React.FocusEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>){

        if( !validatePhone(e.target.value) ){
            setPhoneError(true);
        }
        else{
            setPhoneError(false);
        }
    }


    function validateEmailAddress(e:React.FocusEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>){

        if( !validateEmail(e.target.value) ){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
    }


    function handleSubmit(e:FormEvent){
        
        e.preventDefault();

        if(firstNameError === false && lastNameError === false && phoneError === false && emailError === false){
            addUser(form);
            setForm({firstName:'', lastName:'', phone:'', email:''}); 
        }
        else{
            alert('Fill in all the required fields.');
        }
    }


    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            
            <Input name="firstName" placeholder="First name" value={form.firstName} handleChange={handleChange} handleOnBlur={handleOnBlur} error={firstNameError} errorMsg="Please enter your first name."></Input>
            <Input name="lastName" placeholder="Last name" value={form.lastName}  handleChange={handleChange} handleOnBlur={handleOnBlur} error={lastNameError} errorMsg="Please enter your last name."></Input>
            <Input name="phone" placeholder="Phone number (optional)" value={form.phone} handleChange={handleChange} handleOnBlur={handleOnBlur} error={phoneError} errorMsg="Please enter a correct phone number."></Input>
            <Input name="email" placeholder="Email" value={form.email}  handleChange={handleChange} handleOnBlur={handleOnBlur} error={emailError} errorMsg="Please enter a correct email address."></Input>

            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default Form;