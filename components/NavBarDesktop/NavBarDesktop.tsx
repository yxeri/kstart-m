import { useRouter } from "next/router";
import Link from 'next/link';
import { styled } from "../../styles/stitches.config";

export default function NavBarDesktop(){

    const router = useRouter();
    let currentPage = router.pathname;

    const Nav = styled('nav', {
        marginBottom:50,
        backgroundColor:'$primary',
        borderBottom:'1px solid white',
        display:'flex',
        justifyContent:'center',
        alignItems:'end'
    });

    const Ul = styled('ul', {
        listStyle:'none',
        margin:0,
        padding:0,
        display:'flex',
    });

    const Li = styled('li', {
        '&:hover':{backgroundColor:'$secondary'},
    })
    
    const A = styled('a', {
        display:'block',
        paddingTop:25,
        paddingBottom:25,
        paddingLeft:15,
        paddingRight:15,
        textDecoration:'none',
        color:'$tertiary',
    });

    const SpanBold = styled('span', {
        fontWeight:'bold',
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