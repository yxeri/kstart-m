import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import DarkModeBackground from '../components/DarkModeBackground/DarkModeBackground';
import NavBar from '../components/NavBar/NavBar';


function MyApp({ Component, pageProps }: AppProps) {

    
    return (
        <RecoilRoot>
            <DarkModeBackground></DarkModeBackground>
            <NavBar></NavBar>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp
