import styles from './List.module.scss';
import { IUser } from "../../models/IUser";

interface ListProps{
    users:IUser[];
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