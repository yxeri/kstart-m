import { useRecoilValue } from 'recoil';
import { usersRHF } from '../../atoms/UsersRHF';
import { User } from "../../models/User";
import styles from './RHFList.module.scss';

function RHFList(){

    const users = useRecoilValue<User>(usersRHF);

    return(
        <>
            {users.map((user:User, i:number) => {

                return(
                    <div className={styles.user} key={i}>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </>
    );
}

export default RHFList;