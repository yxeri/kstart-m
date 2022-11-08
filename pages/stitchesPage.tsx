import { styled } from '@stitches/react';
import ResponsiveDiv from '../components/ResponsiveDiv/ResponsiveDiv';
import ResponsiveDivStitches from '../components/ResponsiveDivStitches/ResponsiveDivStitches';
import { useRecoilState } from 'recoil';
import { DarkMode } from '../atoms/DarkMode';
import colors from '../variables/colors';

function StitchesPage(){

    const [darkMode, setDarkMode] = useRecoilState(DarkMode);


    const Div = styled('div', {
        color:'red'
    });


    const Button = styled('button',{

        padding:'10px',
        border:'2px solid black',
        borderRadius:'10px',
        
        variants:{
            darkMode:{
                dark:{
                    backgroundColor:'white',
                    color:colors.tertiary
                },

                light:{
                    backgroundColor:colors.primary,
                    color:colors.tertiary
                }
            }
        }
    });



    function toggleDarkMode(){

        setDarkMode(!darkMode);
    }


    return(
        <div>
            <Button onClick={toggleDarkMode} darkMode={darkMode ? 'dark' : 'light'}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
            <Div>It works!</Div>
            <ResponsiveDiv></ResponsiveDiv>
            <ResponsiveDivStitches></ResponsiveDivStitches>
        </div>
    );
}

export default StitchesPage;