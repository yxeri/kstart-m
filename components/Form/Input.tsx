import { ChangeEvent } from 'react';
import { User } from '../../models/User';
import styles from './Form.module.scss';

type props = {
    name:string;
    placeholder:string;
    value:string;
    handleChange:(e:ChangeEvent<HTMLInputElement>) => void;
    handleOnBlur:(e:React.FocusEvent<HTMLInputElement>) => void;
    error:boolean;
    errorMsg:string;
}

function Input({name, placeholder, value, handleChange, handleOnBlur, error, errorMsg}:props){

    return(
        <>
            <label htmlFor={name}>First name</label>
            <input type="text" placeholder={placeholder} name={name} required value={value} onChange={handleChange} onBlur={handleOnBlur}></input>
            <p className={styles.error + ' ' + (error ? styles.show : styles.hide)}>{errorMsg}</p>
        </>
    );
}

export default Input;