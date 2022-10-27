import styles from './List.module.scss';
import { User } from "../../models/User";

interface ListProps{
    users:User[];
}

function List({users}:ListProps){

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