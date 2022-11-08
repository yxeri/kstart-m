import { styled, keyframes } from '@stitches/react';
import * as Accordion from '@radix-ui/react-accordion';
import colors from '../variables/colors';

function RadixWithStitchesPage(){

    const open = keyframes({
        from: {height: 0},
        to: {height: 'var(--radix-accordion-content-height)'},
      });
      
    const close = keyframes({
    from: {height: 'var(--radix-accordion-content-height)'},
    to: {height: 0},
    });

    const addBorderRadius = keyframes({
        from: {borderRadius:'0px 0px 0px 0px'},
        to: {borderRadius:'0px 0px 10px 10px'}
    });

    const removeBorderRadius = keyframes({
        from: {borderRadius:'0px 0px 10px 10px'},
        to: {borderRadius:'0px 0px 0px 0px'}
    });

    const AccordionHeader = styled(Accordion.Header, {
        margin:0,
    });

    const AccordionContent = styled(Accordion.Content, {
        width:200,
        height:35,
        backgroundColor:colors.primary,
        color:colors.tertiary,
        
        '&[data-state="open"]': {animation: `${open} 300ms ease-out`},
        '&[data-state="closed"]': {animation: `${close} 300ms ease-out`},

        variants:{

            borderRadius:{

                roundedBottom:{
                    borderRadius:'0px 0px 10px 10px'
                }
            }
        }
    });

    const ContentSpan = styled('span', {
        height:'35px',
        lineHeight:'35px',
        paddingLeft:10
    });

    const AccordionTrigger = styled(Accordion.Trigger, {
        width:200,
        height:35,
        padding:10,
        textAlign:'left',
        border:'none',
        backgroundColor:colors.primary,
        color:colors.tertiary,
        cursor:'pointer',
        '&:hover':{backgroundColor:colors.secondary},

        variants:{

            borderRadius:{

                borderRadiusTop:{
                    borderRadius:'10px 10px 0px 0px'
                },

                borderRadiusBottom:{
                    '&[data-state="open"]':{animation:`${removeBorderRadius} 100ms forwards`},
                    '&[data-state="closed"]':{animation:`${addBorderRadius} 800ms forwards`}
                }
            }
        }
    });





    return(
        <Accordion.Root type="single" collapsible>

            <Accordion.Item value="item-0">
                <AccordionHeader>
                    <AccordionTrigger borderRadius={'borderRadiusTop'}>Item 0</AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    <ContentSpan>Content</ContentSpan>
                </AccordionContent>
            </Accordion.Item>

            <Accordion.Item value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>Item 1</AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    <ContentSpan>Content</ContentSpan>
                </AccordionContent>
            </Accordion.Item>

            <Accordion.Item value="item-2">
                <AccordionHeader>
                    <AccordionTrigger>Item 2</AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    <ContentSpan>Content</ContentSpan>
                </AccordionContent>
            </Accordion.Item>

            <Accordion.Item value="item-3">
                <AccordionHeader>
                    <AccordionTrigger borderRadius={'borderRadiusBottom'}>Item 3</AccordionTrigger>
                </AccordionHeader>
                <AccordionContent borderRadius={'roundedBottom'}>
                    <ContentSpan>Content</ContentSpan>
                </AccordionContent>
            </Accordion.Item>

        </Accordion.Root>
    );
}

export default RadixWithStitchesPage;