import * as Accordion from '@radix-ui/react-accordion';
import { styled, keyframes } from '@stitches/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBarPhone(){

    const router = useRouter();
    let currentPage = router.pathname;



    const open = keyframes({
        from:{height:0},
        to:{height:'var(--radix-accordion-content-height)'},
      });
      
    const close = keyframes({
    from: {height:'var(--radix-accordion-content-height)'},
    to: {height:0},
    });

    const addBorderRadius = keyframes({
        from:{borderRadius:'10px 10px 0px 0px'},
        to:{borderRadius:'10px 10px 10px 10px'}
    });

    const removeBorderRadius = keyframes({
        from:{borderRadius:'10px 10px 0px 0px'},
        to:{borderRadius:'10px 10px 00px 00px'}
    });

    const AccordionRoot = styled(Accordion.Root, {
        marginBottom:50,
    });

    const AccordionHeader = styled(Accordion.Header, {
        margin:0,
    });

    const AccordionTrigger = styled(Accordion.Trigger, {
        width:160,
        padding:10,

        border:'none',
        cursor:'pointer',
        backgroundColor:'#003e85',
        color:'#ffffff',

        '&:hover':{backgroundColor:'#0052b1'},

        '&[data-state="open"]':{animation:`${removeBorderRadius} 100ms forwards`},
        '&[data-state="closed"]':{animation:`${addBorderRadius} 800ms forwards`}
    });

    const AccordionContent = styled(Accordion.Content, {
        width:160,
        position:'absolute',

        boxSizing:'border-box',
        backgroundColor:'#003e85',
        borderRadius:'0px 0px 10px 10px',
        overflow:'hidden',

        '&[data-state="open"]': {animation: `${open} 300ms ease-out`},
        '&[data-state="closed"]': {animation: `${close} 300ms ease-out`}
    });

    const Nav = styled('nav', {

    });

    const Ul = styled('ul', {
        listStyle:'none',
        margin:0,
        padding:0
    });

    const Li = styled('li', {
        '&:hover':{backgroundColor:'#0052b1'},

        variants:{

            borderRadius:{
                
                borderRadiusBottom:{
                    borderRadius:'0px 0px 10px 10px'
                }
            }
        }
    })
    
    const A = styled('a', {
        display:'block',
        padding:10,
        textDecoration:'none',
        color:'white'
    });

    const Span = styled('span', {
        fontWeight:'bold'
    });

    return(
        <>
            <AccordionRoot type="single" collapsible>

                <Accordion.Item value="navBar">
                    <AccordionHeader>
                        <AccordionTrigger>Learning</AccordionTrigger>
                    </AccordionHeader>

                    <AccordionContent>
                        <Nav>
                            <Ul>
                                <Li>
                                    <Link href="/" passHref>
                                        <A>{currentPage === '/' ? <Span>Home</Span> : 'Home'}</A>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link href="/radixPage" passHref>
                                        <A>{currentPage === '/radixPage' ? <Span>Radix</Span> : 'Radix'}</A>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link href="/radixWithStitchesPage" passHref>
                                        <A>{currentPage === '/radixWithStitchesPage' ? <Span>Radix With Stitches</Span> : 'Radix With Stitches'}</A>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link href="/recoil" passHref>
                                        <A>{currentPage === '/recoil' ? <Span>Recoil</Span> : 'Recoil'}</A>
                                    </Link>
                                </Li>
                                <Li borderRadius={'borderRadiusBottom'}>
                                    <Link href="/stitchesPage" passHref>
                                        <A>{currentPage === '/stitchesPage' ? <Span>Stitches</Span> : 'Stitches'}</A>
                                    </Link>
                                </Li>
                            </Ul>
                        </Nav>
                    </AccordionContent>
                </Accordion.Item>

            </AccordionRoot>
        </>
    );
}