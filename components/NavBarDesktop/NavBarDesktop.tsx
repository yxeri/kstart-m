import { styled } from "@stitches/react";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function NavBarDesktop(){

    const router = useRouter();
    let currentPage = router.pathname;

    const Nav = styled('nav', {
        margin:'auto',
        marginBottom:50,
        width:'fit-content',
        backgroundColor:'#003e85',
        borderRadius:'10px 10px 10px 10px'
    });

    const Ul = styled('ul', {
        listStyle:'none',
        margin:0,
        padding:0,
        display:'flex'
    });

    const Li = styled('li', {
        borderRadius:'10px 10px 10px 10px',
        '&:hover':{backgroundColor:'#0052b1'}
    })
    
    const A = styled('a', {
        display:'block',
        padding:15,
        textDecoration:'none',
        color:'white',
    });

    const Span = styled('span', {
        fontWeight:'bold'
    });


    return(
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
                <Li>
                    <Link href="/stitchesPage" passHref>
                        <A>{currentPage === '/stitchesPage' ? <Span>Stitches</Span> : 'Stitches'}</A>
                    </Link>
                </Li>
            </Ul>
        </Nav>
    );
}