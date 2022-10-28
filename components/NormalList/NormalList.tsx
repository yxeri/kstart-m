import styles from './NormalList.module.scss';
import { User } from "../../models/User";
import { useRecoilValue } from 'recoil';
import { Users } from '../../atoms/Users';


function NormalList(){

    const users = useRecoilValue<User[]>(Users);

    return(
        <>
            {users.map((user, i) => {

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

export default NormalList;