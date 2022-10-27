import { ChangeEvent } from 'react';
import styles from './Form.module.scss';

type props = {
    name:string;
    label:string;
    value:string;
    handleChange:(e:ChangeEvent<HTMLInputElement>) => void;
    handleOnBlur:(e:React.FocusEvent<HTMLInputElement>) => void;
    error:boolean;
    errorMsg:string;
}

function Input({name, label, value, handleChange, handleOnBlur, error, errorMsg}:props){

    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input type="text" placeholder={label} name={name} required value={value} onChange={handleChange} onBlur={handleOnBlur}></input>
            <p className={styles.error + ' ' + (error ? styles.show : styles.hide)}>{errorMsg}</p>
        </>
    );
}

export default Input;