import * as Accordion from '@radix-ui/react-accordion';
import { styled } from '@stitches/react';
import styles from '../styles/radixPage.module.scss';

function RadixPage(){


    return(
        <Accordion.Root type="single" collapsible className={styles.container}>

            <Accordion.Item value="item-0" className={styles.item}>
                <Accordion.Header className={styles.header}>
                    <Accordion.Trigger className={styles.trigger}>Item 0</Accordion.Trigger>
                </Accordion.Header >
                <Accordion.Content className={styles.content}>
                    <span className={styles.contentSpan}>asdf</span>
                </Accordion.Content>
            </Accordion.Item>


            <Accordion.Item value="item-1" className={styles.item}>
                <Accordion.Header className={styles.header}>
                    <Accordion.Trigger className={styles.trigger}>Item 1</Accordion.Trigger>
                </Accordion.Header >
                <Accordion.Content className={styles.content}>
                    <span className={styles.contentSpan}>asdf</span>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className={styles.item}>
                <Accordion.Header className={styles.header}>
                    <Accordion.Trigger className={styles.trigger}>Item 2</Accordion.Trigger>
                </Accordion.Header >
                <Accordion.Content className={styles.content}>
                    <span className={styles.contentSpan}>asdf</span>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3" className={styles.item}>
                <Accordion.Header className={styles.header}>
                    <Accordion.Trigger className={styles.trigger}>Item 3</Accordion.Trigger>
                </Accordion.Header >
                <Accordion.Content className={styles.content}>
                    <span className={styles.contentSpan}>asdf</span>
                </Accordion.Content>
            </Accordion.Item>

        </Accordion.Root>
    );
}

export default RadixPage;