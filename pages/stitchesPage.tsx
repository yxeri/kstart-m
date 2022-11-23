import ResponsiveDiv from '../components/ResponsiveDiv/ResponsiveDiv';
import ResponsiveDivStitches from '../components/ResponsiveDivStitches/ResponsiveDivStitches';
import { useRecoilState } from 'recoil';
import { DarkMode } from '../atoms/DarkMode';
import ThemeButton from '../components/ThemeButton/ThemeButton';
import Div from '../components/Div/Div';

function StitchesPage(){

    const [darkMode, setDarkMode] = useRecoilState(DarkMode);

    return(
        <div>
            <ThemeButton onClick={() => {setDarkMode(!darkMode)}} darkMode={darkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</ThemeButton>
            <Div color="red">It works!</Div>
            <ResponsiveDiv></ResponsiveDiv>
            <ResponsiveDivStitches></ResponsiveDivStitches>
        </div>
    );
}

export default StitchesPage;