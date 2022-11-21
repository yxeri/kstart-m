import * as Accordion from '@radix-ui/react-accordion';
import AccordionItemWithStitches from '../components/AccordionItemWithStitches/AccordionItemWithStitches';


function RadixWithStitchesPage(){

    return(
        <Accordion.Root type="single" collapsible style={{marginLeft:'20px'}}>

            <AccordionItemWithStitches
                value="item-0"
                borderRadius="borderRadiusTop"
                triggerContent="Item 0"
                content="Item 0 content"
            ></AccordionItemWithStitches>

            <AccordionItemWithStitches
                value="item-1"
                triggerContent="Item 1"
                content="Item 1 content"
            ></AccordionItemWithStitches>

            <AccordionItemWithStitches
                value="item-2"
                triggerContent="Item 2"
                content="Item 2 content"
            ></AccordionItemWithStitches>

            <AccordionItemWithStitches
                value="item-3"
                borderRadius="borderRadiusBottom"
                borderRadiusContent="roundedBottom"
                triggerContent="Item 3"
                content="Item 3 content"
            ></AccordionItemWithStitches>

        </Accordion.Root>
    );
}

export default RadixWithStitchesPage;