import * as Accordion from '@radix-ui/react-accordion';
import { styled, keyframes } from '@stitches/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar(){

    const [version, setVersion] = useState('desktop');

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        if(width <= 768){
            setVersion('mobile');
        }
        else{
            setVersion('desktop');
        }
    }

    useEffect(() => {
        getWindowDimensions();
    },[]);





    

    let currentPage = window.location.href.split('/').pop();

    if(currentPage === ''){
        currentPage = 'home';
    }
        





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

        '&[data-state="closed"]':{borderRadius:'10px'},
        '&[data-state="open"]':{borderRadius:'10px 10px 0px 0px'}
    });

    const AccordionContent = styled(Accordion.Content, {
        width:160,
        position:'absolute',

        boxSizing:'border-box',
        backgroundColor:'#003e85',
        borderRadius:'0px 0px 10px 10px'
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
        borderRadius:'0px 0px 10px 10px'
    })
    
    const A = styled('a', {
        display:'block',
        padding:10,
        textDecoration:'none',
        color:'white',
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
                                        <A>{currentPage === 'home' ? <Span>Home</Span> : 'Home'}</A>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link href="/radixPage" passHref>
                                        <A>{currentPage === 'radixPage' ? <Span>Radix</Span> : 'Radix'}</A>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link href="/radixWithStitchesPage" passHref>
                                        <A>{currentPage === 'radixWithStitchesPage' ? <Span>Radix With Stitches</Span> : 'Radix With Stitches'}</A>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link href="/recoil" passHref>
                                        <A>{currentPage === 'recoil' ? <Span>Recoil</Span> : 'Recoil'}</A>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link href="/stitchesPage" passHref>
                                        <A>{currentPage === 'stitchesPage' ? <Span>Stitches</Span> : 'Stitches'}</A>
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