import * as Accordion from '@radix-ui/react-accordion';
import styles from './AccordionItem.module.scss';

interface props{
    valuee:string;
    triggerContent:string;
    content:string;
}

export default function AccordionItem(props:props){

    return(
        <Accordion.Item value={props.valuee} className={styles.item}>
            <Accordion.Header className={styles.header}>
                <Accordion.Trigger className={styles.trigger}>{props.triggerContent}</Accordion.Trigger>
            </Accordion.Header >
            <Accordion.Content className={styles.content}>
                <span className={styles.contentSpan}>{props.content}</span>
            </Accordion.Content>
        </Accordion.Item>
    );
}