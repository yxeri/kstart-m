import { useRecoilValue } from 'recoil';
import { RHFUsers } from '../../atoms/RHFUsers';
import { User } from "../../models/User";
import styles from './RHFRecoilList.module.scss';

function RHFRecoilList(){

    const users = useRecoilValue<User[]>(RHFUsers);

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

export default RHFRecoilList;