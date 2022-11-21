import ResponsiveDiv from '../components/ResponsiveDiv/ResponsiveDiv';
import ResponsiveDivStitches from '../components/ResponsiveDivStitches/ResponsiveDivStitches';
import StyledDiv from '../components/Styled/StyledDiv';
import StyledButton from '../components/Styled/StyledButton';
import { useRecoilState } from 'recoil';
import { DarkMode } from '../atoms/DarkMode';

function StitchesPage(){

    const [darkMode, setDarkMode] = useRecoilState(DarkMode);

    function toggleDarkMode(){

        setDarkMode(!darkMode);
    }

    return(
        <div>
            <StyledButton variant={darkMode} onClick={toggleDarkMode} text={darkMode ? 'Light Mode' : 'Dark Mode'}></StyledButton>
            <StyledDiv>It works!</StyledDiv>
            <ResponsiveDiv></ResponsiveDiv>
            <ResponsiveDivStitches></ResponsiveDivStitches>
        </div>
    );
}

export default StitchesPage;