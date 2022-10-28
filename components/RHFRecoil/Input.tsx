import { useFormContext } from 'react-hook-form';
import { validateEmail } from '../ValidateEmail/ValidateEmail';
import { validatePhone } from '../ValidatePhone/ValidatePhone';
import styles from './RHFRecoil.module.scss';

type props = {
    name:string;
    label:string;
    type:string;
    req:boolean;
    minLength:number;
    errorMsg:string;
}

function Input({name, label, type, req, minLength, errorMsg}:props){

    const {register, getFieldState, formState} = useFormContext();
    const {error} = getFieldState(name, formState);

    return(
        <>
            <label htmlFor={name}>{label}</label>

            <input type={type} placeholder={label} {...register(
                name, 
                {
                    required: req,
                    minLength: minLength,
                    validate: val => {
                        if(val && name === 'phone'){
                            return validatePhone(val);
                        }
                        if(val && name === 'email'){
                            return validateEmail(val);
                        }
                    }
                })}>
            </input>

            <p className={styles.error + ' ' + (error ? styles.show : styles.hide)}>{errorMsg}</p>
        </>
    );
}

export default Input;