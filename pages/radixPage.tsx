import * as Accordion from '@radix-ui/react-accordion';
import { styled } from '@stitches/react';

function RadixPage(){

    const Acc = styled('span', {
        border:'2px solid red'
    });


    return(
        <>
            <Accordion.Root type="single" collapsible>

                <Accordion.Item value="item-1">
                    <Accordion.Header>
                        <Accordion.Trigger>
                            <Acc>asddas</Acc>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <span>test</span>
                    </Accordion.Content>
                </Accordion.Item>


                <Accordion.Item value="item-2">
                    <Accordion.Header>
                        <Accordion.Trigger>
                            <span>Test</span>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <span>test</span>
                    </Accordion.Content>
                </Accordion.Item>

            </Accordion.Root>
        </>
    );
}

export default RadixPage;