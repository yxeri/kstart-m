import type { NextPage } from 'next'
import { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import RHF from '../components/RHF/RHF';
import RHFList from '../components/RHFList/RHFList';
import { User } from '../models/User';
import styles from '../styles/Index.module.scss';

const Index: NextPage = () => {

    const [usersRHF, setUsersRHF] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);


    function addUserRHF(user:User){
        setUsersRHF([...usersRHF, user]);
    }

    
    function addUser(user:User){
        setUsers([...users, user]);
    }


    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <h1 className={styles.h1}>React Hook Form</h1>
                <RHF addUser={addUserRHF}></RHF>
                <RHFList users={usersRHF}></RHFList>
            </section>

            <section className={styles.section}>
                <h1 className={styles.h1}>Normal Form</h1>
                <Form addUser={addUser}></Form>
                <List users={users}></List>
            </section>
        </div>
    );
}


export default Index;