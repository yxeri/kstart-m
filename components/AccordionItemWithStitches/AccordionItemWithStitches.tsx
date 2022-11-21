import * as Accordion from '@radix-ui/react-accordion';
import { keyframes, styled } from '../../styles/stitches.config';


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
    backgroundColor:'$primary',
    color:'$tertiary',
    overflow:'hidden',
    
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
    backgroundColor:'$primary',
    color:'$tertiary',
    cursor:'pointer',
    '&:hover':{backgroundColor:'$secondary'},

    variants:{

        borderRadius:{

            borderRadiusTop:{
                borderRadius:'10px 10px 0px 0px'
            },

            borderRadiusBottom:{
                '&[data-state="open"]':{animation:`${removeBorderRadius} 100ms forwards`},
                '&[data-state="closed"]':{animation:`${addBorderRadius} 800ms forwards`}
            },

            none:{
                
            }
        }
    }
});


interface props{
    value:string;
    borderRadius?:any;
    borderRadiusContent?:any;
    triggerContent:string;
    content:string;
}


export default function AccordionItemWithStitches(props:props){

    return(
        <Accordion.Item value={props.value}>
            <AccordionHeader>
                <AccordionTrigger borderRadius={props.borderRadius}>{props.triggerContent}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent borderRadius={props.borderRadiusContent}>
                <ContentSpan>{props.content}</ContentSpan>
            </AccordionContent>
        </Accordion.Item>
    );
}