import styles from '../RHF.module.scss';

interface ILastNameProps{
    register:any;
    errors:any;
}

function LastName({register, errors}:ILastNameProps){

    return(
        <>
            <label htmlFor="lastName">Last name</label>
            <input type="text" placeholder="First name" {...register("lastName", {required: true, minLength: 3})}></input>
            {errors.lastName && <p className={styles.error}>Please enter your last name.</p>}
        </>
    );
}

export default LastName;