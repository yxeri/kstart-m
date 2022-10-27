import styles from './RHFList.module.scss';
import { User } from "../../models/User";

interface ListProps{
    users:User[];
}

function RHFList({users}:ListProps){

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

export default RHFList;