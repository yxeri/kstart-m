import type { NextPage } from 'next'
import { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import RHF from '../components/RHF/RHF';
import RHFList from '../components/RHFList/RHFList';
import styles from '../styles/Index.module.scss';


const Index: NextPage = () => {


    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <h1 className={styles.h1}>React Hook Form</h1>
                <RHF></RHF>
                <RHFList></RHFList>
            </section>

            <section className={styles.section}>
                <h1 className={styles.h1}>Normal Form</h1>
                <Form></Form>
                <List></List>
            </section>
        </div>
    );
}


export default Index;