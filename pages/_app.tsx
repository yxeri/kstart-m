import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import DarkModeBackground from '../components/DarkModeBackground/DarkModeBackground';

function MyApp({ Component, pageProps }: AppProps) {


    return (
        <RecoilRoot> 
            <DarkModeBackground></DarkModeBackground>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp
