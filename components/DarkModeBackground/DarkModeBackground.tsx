import { useRecoilValue } from "recoil";
import { DarkMode } from "../../atoms/DarkMode";
import styles from './DarkModeBackground.module.scss';

function DarkModeBackground(){

    const darkMode = useRecoilValue(DarkMode);

    return(
        <div className={styles.div} style={{backgroundColor: darkMode ? '#373738' : 'white'}}></div>
    );
}

export default DarkModeBackground;