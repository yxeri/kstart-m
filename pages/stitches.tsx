import { styled } from '@stitches/react';
import ResponsiveDiv from '../components/ResponsiveDiv/ResponsiveDiv';
import ResponsiveDivStitches from '../components/ResponsiveDivStitches/ResponsiveDivStitches';

function Stitches(){

    const Div = styled('div', {
        color:'red'
    });

    return(
        <>
            <Div>It works!</Div>
            <ResponsiveDiv></ResponsiveDiv>
            <ResponsiveDivStitches></ResponsiveDivStitches>
        </>
    );
}

export default Stitches;