import type { NextPage } from 'next'
import { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import RHF from '../components/RHF/RHF';
import RHFList from '../components/RHFList/RHFList';
import { IUser } from '../models/IUser';
import styles from '../styles/Index.module.scss';

const Index: NextPage = () => {

    const [usersRHF, setUsersRHF] = useState<IUser[]>([]);

    function addUserRHF(user:IUser){
        setUsersRHF([...usersRHF, user]);
    }

    const [users, setUsers] = useState<IUser[]>([]);

    function addUser(user:IUser){
        setUsers([...users, user]);
    }



    return (

        <div className={styles.wrapper}>
            <section className={styles.section}>
                <RHF addUser={addUserRHF}></RHF>
                <RHFList users={usersRHF}></RHFList>
            </section>

            <section className={styles.section}>
                <Form addUser={addUser}></Form>
                <List users={users}></List>
            </section>
        </div>
    );
}


export default Index;