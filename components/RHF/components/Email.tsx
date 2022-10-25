import { validateEmail } from '../../ValidateEmail/ValidateEmail';
import styles from '../RHF.module.scss';

interface IEmailProps{
    register:any;
    errors:any;
}

function Email({register, errors}:IEmailProps){

    return(
        <>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" {...register("email", {required: true, validate: validateEmail})}></input>
            {errors.email && <p className={styles.error}>Please enter a valid email adress.</p>}
        </>
    );
}

export default Email;