import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TempMessage } from "../../../../atoms/TempMessage";
import { styled } from "../../../../styles/stitches.config";


interface props{
    userMap:Map<string, string>;
}


const ChatMessage = styled('p', {
    overflowWrap:'break-word',
    color:'$secondary'
});


export default function TemporaryMessage(props:props){

    const tempMessage = useRecoilValue(TempMessage);

    return(
        <>
            {tempMessage.show &&
                <ChatMessage>
                    <b>{tempMessage.timeCreated} - {props.userMap.get(tempMessage.userId)}: </b>
                    {tempMessage.text}
                </ChatMessage>
            }
        </>
    );
}