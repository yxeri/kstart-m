import ResponsiveDiv from '../components/ResponsiveDiv/ResponsiveDiv';
import ResponsiveDivStitches from '../components/ResponsiveDivStitches/ResponsiveDivStitches';
import { useRecoilState } from 'recoil';
import { DarkMode } from '../atoms/DarkMode';
import { styled } from '../styles/stitches.config';

function StitchesPage(){

    const [darkMode, setDarkMode] = useRecoilState(DarkMode);

    /*
     * TODO Move Div and Button outside of StitchesPages. Their declaration has no dependency to StitchesPage
     * and could be reused in the future
     */
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
                    color:'$tertiary'
                },

                light:{
                    backgroundColor:'$primary',
                    color:'$tertiary'
                }
            }
        }
    });

    /*
     * TODO This could be extracted into a separate component (e.g. ThemeButton). Setting darkmode will trigger
     * a re-render of the StichesPage component. You can avoid that by moving it into a separate component.
     */
    function toggleDarkMode(){

        setDarkMode(!darkMode);
    }


    /*
     * TODO Stitches allow variants that are booleans (so true false instead of dark and light inside darkMode
     */
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