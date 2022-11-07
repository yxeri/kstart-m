import { useState } from "react";
import RHFRecoilList from "../components/RHFRecoilList/RHFRecoilList";
import RHF from "../components/RHF/RHF";
import RHFList from "../components/RHFList/RHFList";
import RHFRecoil from "../components/RHFRecoil/RHFRecoil";
import { User } from "../models/User";
import styles from "../styles/Recoil.module.scss";

function Recoil(){

    const [users, setUsers] = useState<User[]>([]);

    function addUser(user:User){
        setUsers([...users, user]);
    }

    return(
        <div className={styles.wrapper}>
            <section>
                <h1>Reach Hook Form</h1>
                <RHF addUser={addUser}></RHF>
                <RHFList users={users}></RHFList>
            </section>

            <section>
                <h1>RHF Recoil</h1>
                <RHFRecoil></RHFRecoil>
                <RHFRecoilList></RHFRecoilList>
            </section>
        </div>
    );
}

export default Recoil;