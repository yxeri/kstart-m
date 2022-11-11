import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { Messages } from "../../../atoms/Messages";
import { keyframes, styled } from "../../../styles/stitches.config";


interface props{
    showChat:boolean;
    userMap:Map<string, string>;
}




const ChatBox = styled('div', {
    width:'100%',
    height:600,
    padding:'0px 10px',

    overflow:'auto',
    backgroundColor:'$primary',
    color:'$tertiary',
    boxSizing:'border-box',

    '&::-webkit-scrollbar':{
        width:13
    },

    '&::-webkit-scrollbar-track':{
        backgroundColor:'$secondary'
    },

    '&::-webkit-scrollbar-thumb':{
        backgroundColor:'$tertiary',
        height:50
    },

    '&::-webkit-scrollbar-thumb:hover':{
        background:'$tertiaryHover'
    }, 
});

const ChatMessage = styled('p', {
    overflowWrap:'break-word',
});

const MultiLineMsg = styled('span', {
    display:'block',
});

const EmptyLine = styled('span', {
    display:'block',
    margin:'1em'
});


export default function ChatMessages(props:props){

    const [messagesToShow, setMessagesToshow] = useState([]);
    const messagesFromAtom = useRecoilValue(Messages);

    const ref = useRef<null | HTMLDivElement>(null);


    useEffect(() => {

        let mappedMessages:any = messagesFromAtom.map((message, i) => {

            let date = new Date(message.timeCreated);
    
            var fullDate = date.toISOString().slice(0,10); //Format: "2014-05-12"
            let time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    
            let multiLineMsg = message.text.map((msg, i) => {

                //line break msg
                if(msg === ''){
                    return <EmptyLine key={i}></EmptyLine>;
                }
    
                //inline msg
                if(i === 0){

                    return(msg);
                }
    
                //block msg
                else{
    
                    return(
                        <MultiLineMsg key={i}>
                            {msg}
                        </MultiLineMsg>
                    );
                }
            });
    
            return(
                <ChatMessage key={i}>
                    <b>{fullDate.toString()} {time} - {props.userMap.get(message.ownerId)}: </b>
                    {multiLineMsg}
                </ChatMessage>
            );
            
        });
    
        if(messagesFromAtom.length < 1){
    
            mappedMessages = <p>No messages in this room.</p>;
        }

        setMessagesToshow(mappedMessages);
    }, [messagesFromAtom]);


    useEffect(() => {

        if(props.showChat){
            setTimeout(() => {
                ref.current?.scrollIntoView({behavior: 'smooth'});
            }, 300);
        }

    }, [props.showChat, messagesFromAtom]);


    return(
        <ChatBox>
            {messagesToShow}
            <div ref={ref}></div>
        </ChatBox>
    );
}