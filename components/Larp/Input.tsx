import { useFormContext } from "react-hook-form";
import styles from './Input.module.scss';

interface props{
    name:string;
    label:string;
    type:string;
    minLength:number;
    errorMsg:string;
}

export default function Input({name, label, type, minLength, errorMsg}:props){

    const {register, getFieldState, formState} = useFormContext();
    const {error} = getFieldState(name, formState);

    return(
        <>
            <label htmlFor={name} className={styles.label}>{label}</label>

            <input type={type} placeholder={label} className={styles.input} {...register(
                name,
                {
                    required: true,
                    minLength: minLength,
                }
            )}>
            </input>

            <p className={styles.error + ' ' + (error ? styles.show : styles.hide)}>{errorMsg}</p>
        </>
    );
}