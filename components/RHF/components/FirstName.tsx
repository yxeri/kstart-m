import styles from '../RHF.module.scss';

interface IFirstNameProps{
    register:any;
    errors:any;
}

function FirstName({register, errors}:IFirstNameProps){

    return(
        <>
            <label htmlFor="firstName">First name</label>
            <input type="text" placeholder="First name" {...register("firstName", {required: true, minLength: 3})}></input> 
            {errors.firstName && <p className={styles.error}>Please enter your first name.</p>}
        </>
    );
}

export default FirstName;