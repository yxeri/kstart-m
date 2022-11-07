import styles from './List.module.scss';
import { User } from "../../models/User";
import { useRecoilValue } from 'recoil';
import { Users } from '../../atoms/Users';


function List(){

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

export default List;