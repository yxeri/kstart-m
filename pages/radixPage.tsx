import * as Accordion from '@radix-ui/react-accordion';
import AccordionItem from '../components/AccordionItem/AccordionItem';
import styles from '../styles/radixPage.module.scss';

function RadixPage(){

    
    return(
        <Accordion.Root type="single" collapsible className={styles.container}>

            <AccordionItem valuee="item-0" triggerContent="Item 0" content="item 0"></AccordionItem>
            <AccordionItem valuee="item-1" triggerContent="Item 1" content="item 1"></AccordionItem>
            <AccordionItem valuee="item-2" triggerContent="Item 2" content="item 2"></AccordionItem>
            <AccordionItem valuee="item-3" triggerContent="Item 3" content="item 3"></AccordionItem>

        </Accordion.Root>
    );
}

export default RadixPage;