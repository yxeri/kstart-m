
import { validatePhone } from '../../ValidatePhone/ValidatePhone';
import styles from '../RHF.module.scss';

interface IPhoneProps{
    register:any;
    errors:any;
}

function Phone({register, errors}:IPhoneProps){

    return(
        <>
            <label htmlFor="phone">Phone</label>
            <input type="tel" placeholder="Phone" {...register("phone", {validate: validatePhone})}></input>
            {errors.phone && <p className={styles.error}>Please enter a valid phone number.</p>}
        </>
    );
}

export default Phone;