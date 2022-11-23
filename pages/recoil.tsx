import { useState } from "react";
import RHFRecoilList from "../components/RHFRecoilList/RHFRecoilList";
import RHF from "../components/RHF/RHF";
import RHFList from "../components/RHFList/RHFList";
import RHFRecoil from "../components/RHFRecoil/RHFRecoil";
import { User } from "../models/User";
import styles from "../styles/Recoil.module.scss";
import Section from "../components/Section/Section";

function Recoil(){

    const [users, setUsers] = useState<User[]>([]);

    function addUser(user:User){
        setUsers([...users, user]);
    }

    
    return(
        <div className={styles.wrapper}>
            <Section title="Reach Hook Form">
                <RHF addUser={addUser}></RHF>
                <RHFList users={users}></RHFList>
            </Section>

            <Section title="RHF Recoil">
                <RHFRecoil></RHFRecoil>
                <RHFRecoilList></RHFRecoilList>
            </Section>
        </div>
    );
}

export default Recoil;