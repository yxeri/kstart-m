import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoggedInUser } from "../../../../atoms/LoggedInUser";
import { Messages } from "../../../../atoms/Messages";
import { SelectedRoom } from "../../../../atoms/SelectedRoom";
import { TempMessage } from "../../../../atoms/TempMessage";
import { Message } from "../../../../models/Message";
import { styled } from "../../../../styles/stitches.config";
import TemporaryMessage from "./TemporaryMessage";


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
        backgroundColor:'$tertiary'
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
    const [messages, setMessages] = useRecoilState(Messages);
    const selectedRoom = useRecoilValue(SelectedRoom);
    const loggedInUser = useRecoilValue(LoggedInUser);
    const tempMessages = useRecoilValue(TempMessage);

    const ref = useRef<null | HTMLDivElement>(null);

    




    async function getMessages(){

        let res = await axios.post('http://localhost:3000/api/larp/getMessages', {token:loggedInUser.token, roomId:selectedRoom});

    
        if(res.data.data && res.data.data.messages){

            res.data.data.messages.forEach((message:Message) => {
                setMessages(prev => [...prev, {text:message.text, timeCreated:message.timeCreated, ownerId:message.ownerId}]);
            });
        }
        else{
            setMessages([]);
        }
    }



    //Get messages when user selects a (new) room.
    useEffect(() =>{

        getMessages();
    }, [selectedRoom]);





    useEffect(() => {

        let mappedMessages:any = messages.map((message, i) => {

            let date = new Date(message.timeCreated);
    
            let fullDate = date.toISOString().slice(0,10); //Format: "2014-05-12"
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
    
        if(messages.length < 1){
    
            mappedMessages = <p>No messages in this room.</p>;
        }

        setMessagesToshow(mappedMessages);
    }, [messages]);



    //300 ms delay on props.showChat and messages
    useEffect(() => {

        setTimeout(() => {
            
            if(props.showChat){
                ref.current?.scrollIntoView({behavior: 'smooth'});
            }
        }, 300);

    }, [props.showChat, messages]);


    //no delay on tempMessages
    useEffect(() => {

        if(props.showChat){
            ref.current?.scrollIntoView();
        }

    }, [tempMessages]);


    return(
        <ChatBox>
            {messagesToShow}
            <TemporaryMessage userMap={props.userMap}></TemporaryMessage>
            <div ref={ref}></div>
        </ChatBox>
    );
}