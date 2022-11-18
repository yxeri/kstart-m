import NavBarDesktop from "../NavBarDesktop/NavBarDesktop";
import NavBarPhone from "../NavBarPhone/NavBarPhone";
import useBreakpoint from 'use-breakpoint';
import { BREAKPOINTS } from "../../constants/breakpoints";


export default function NavBar(){

    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

    return(
        <>
            {breakpoint === 'mobile' ? <NavBarPhone></NavBarPhone> : <NavBarDesktop></NavBarDesktop>}
        </>
    );
}