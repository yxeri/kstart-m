import type { NextPage } from 'next'
import { useState } from 'react';
import NormalForm from '../components/NormalForm/NormalForm';
import NormalList from '../components/NormalList/NormalList';
import RHF from '../components/RHF/RHF';
import RHFList from '../components/RHFList/RHFList';
import { User } from '../models/User';
import styles from '../styles/Index.module.scss';


const Index: NextPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    function addUser(user:User){
        setUsers([...users, user]);
    }

    return (
        <div className={styles.wrapper}>
            <section>
                <h1>Normal Form</h1>
                <NormalForm></NormalForm>
                <NormalList></NormalList>
            </section>

            <section>
                <h1>React Hook Form</h1>
                <RHF addUser={addUser}></RHF>
                <RHFList users={users}></RHFList>
            </section>
        </div>
    );
}


export default Index;