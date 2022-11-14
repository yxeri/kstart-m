import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TempMessage } from "../../../../atoms/TempMessage";

export default function TemporaryMessage(){

    const [tempMessage, setTempMessage] = useRecoilState(TempMessage);

    useEffect(() => {
        
    }, [tempMessage]);

    return(
        <>
            asdf
        </>
    );
}