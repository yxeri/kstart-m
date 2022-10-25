import React, { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "../../models/IUser";
import styles from './Form.module.scss';


interface FormProps{
    addUser: (user:IUser) => void;
}

function Form({addUser}:FormProps){

    const [form, setForm] = useState<IUser>({firstName:'', lastName:'', phone:'', email:''});


    function handleChange(e:ChangeEvent<HTMLInputElement>){

        addUser(form);
        setForm({...form, [e.target.name]: e.target.value});
    }


    function handleSubmit(e:FormEvent){
        e.preventDefault();

        setForm({firstName:'', lastName:'', phone:'', email:''});
    }


    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name </label>
            <input type="text" placeholder="First name" name="firstName" value={form.firstName} onChange={handleChange}></input>

            <label htmlFor="lastName">Last name </label>
            <input type="text" placeholder="First name" name="lastName" value={form.lastName} onChange={handleChange}></input>

            <label htmlFor="phone">Phone </label>
            <input type="tel" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange}></input>

            <label htmlFor="email">Email </label>
            <input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange}></input>
        
            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default Form;