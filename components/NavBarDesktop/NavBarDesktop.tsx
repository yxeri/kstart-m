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
        borderRadius:'10px 10px 10px 10px',
    });

    const Ul = styled('ul', {
        listStyle:'none',
        margin:0,
        padding:0,
        display:'flex',
    });

    const Li = styled('li', {
        borderRadius:'10px 10px 10px 10px',
        '&:hover':{backgroundColor:'#0052b1'},
    })
    
    const A = styled('a', {
        display:'block',
        padding:15,
        textDecoration:'none',
        color:'white',
    });

    const SpanBold = styled('span', {
        //fontWeight:'bold',
        textShadow:'0px 1px 0px white'
    });



    return(
        <Nav>
            <Ul>
                <Li>
                    <Link href="/" passHref>
                        <A>{currentPage === '/' ? <SpanBold>Home</SpanBold> : 'Home'}</A>
                    </Link>
                </Li>
                <Li>
                    <Link href="/radixPage" passHref>
                        <A>{currentPage === '/radixPage' ? <SpanBold>Radix</SpanBold> : 'Radix'}</A>
                    </Link>
                </Li>
                <Li>
                    <Link href="/radixWithStitchesPage" passHref>
                        <A>{currentPage === '/radixWithStitchesPage' ? <SpanBold>Radix With Stitches</SpanBold> : 'Radix With Stitches'}</A>
                    </Link>
                </Li>
                <Li>
                    <Link href="/recoil" passHref>
                        <A>{currentPage === '/recoil' ? <SpanBold>Recoil with RHF</SpanBold> : 'Recoil with RHF'}</A>
                    </Link>
                </Li>
                <Li>
                    <Link href="/stitchesPage" passHref>
                        <A>{currentPage === '/stitchesPage' ? <SpanBold>Stitches</SpanBold> : 'Stitches'}</A>
                    </Link>
                </Li>
                <Li>
                    <Link href="/larp" passHref>
                        <A>{currentPage === '/larp' ? <SpanBold>Larp</SpanBold> : 'Larp'}</A>
                    </Link>
                </Li>
            </Ul>
        </Nav>
    );
}