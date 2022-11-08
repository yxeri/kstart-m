import { useRecoilValue } from "recoil";
import { DarkMode } from "../../atoms/DarkMode";
import colors from "../../variables/colors";
import styles from './DarkModeBackground.module.scss';

function DarkModeBackground(){

    const darkMode = useRecoilValue(DarkMode);

    return(
        <div className={styles.div} style={{backgroundColor: darkMode ? colors.primary : 'white'}}></div>
    );
}

export default DarkModeBackground;