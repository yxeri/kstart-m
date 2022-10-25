import type { NextPage } from 'next'
import { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import { IUser } from '../models/IUser';
import styles from '../styles/Index.module.scss';

const Index: NextPage = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    function addUser(user:IUser){
        setUsers([...users, user]);
    }

    return (
        <>
            <Form addUser={addUser}></Form>
            <List users={users}></List>
        </>
    );
}


export default Index;