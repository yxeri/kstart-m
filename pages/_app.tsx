import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import DarkModeBackground from '../components/DarkModeBackground/DarkModeBackground';
import NavBarPhone from '../components/NavBarPhone/NavBarPhone';
import { useEffect, useState } from 'react';
import NavBarDesktop from '../components/NavBarDesktop/NavBarDesktop';

function MyApp({ Component, pageProps }: AppProps) {

    const [version, setVersion] = useState('desktop');

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        if(width <= 768){
            setVersion('phone');
        }
        else{
            setVersion('desktop');
        }
    }

    useEffect(() => {
        getWindowDimensions();
    },[]);



    return (
        <RecoilRoot> 
            <DarkModeBackground></DarkModeBackground>
            {version === 'phone' && <NavBarPhone></NavBarPhone>}
            {version === 'desktop' && <NavBarDesktop></NavBarDesktop>}
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp
