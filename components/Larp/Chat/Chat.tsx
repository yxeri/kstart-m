import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { Messages } from "../../../atoms/Messages";
import { keyframes, styled } from "../../../styles/stitches.config";


interface user{
    username:string;
    ownerId:string;
}


const Container = styled('div', {
    position:'absolute',
    bottom:0,
    right:150,
    width:500
});

const OverflowHidden = styled('div', {
    overflow:'hidden'
});

const Button = styled('button', {
    width:'50%',
    height:50,
    float:'right',
    backgroundColor:'$primary',
    color:'$tertiary',
    borderRight:'2px solid $tertiary',
    borderLeft:'2px solid $tertiary',
    cursor:'pointer',

    '&:hover':{backgroundColor:'$secondary'},

    variants:{
        border:{
            show:{
                borderTop:'2px solid $tertiary'
            },
            hide:{
                borderTop:'none'
            }
        }
    }
});

const open = keyframes({
    '0%':{
        transform:'translate(100%, 100%)'
    },

    '100%':{
        transform:'translate(0%, 0%)'
    }
});

const close = keyframes({
    '0%':{
        transform:'translate(0%, 0%)'
    },

    '100%':{
        transform:'translate(100%, 100%)'
    }
});

const ChatBox = styled('div', {
    width:'100%',
    height:600,
    padding:'0px 10px',

    overflow:'auto',
    backgroundColor:'$primary',
    color:'$tertiary',
    border:'2px solid $tertiary',
    boxSizing:'border-box',

    transformOrigin:'bottom right',

    '&::-webkit-scrollbar':{
        width:13
    },

    '&::-webkit-scrollbar-track':{

    },

    '&::-webkit-scrollbar-thumb':{
        background:'$tertiary',
        height:50
    },

    '&::-webkit-scrollbar-thumb:hover':{
        background:'$tertiaryHover'
    },

    variants:{
        anim:{
            close:{
                animation:`${close} 300ms ease-out forwards`
            },

            open:{
                animation:`${open} 300ms ease-out forwards`
            }
        },

        visibility:{
            show:{
                visibility:'visible'
            },
            hide:{
                visibility:'hidden'
            }
        }
    }
    
});

const ChatMessage = styled('p', {
    overflowWrap:'break-word',
});

const MultiLineMsg = styled('span', {
    display:'block',
});







export default function Chat(){

    const [showChat, setShowChat] = useState<boolean>(false);
    const [userMap, setUserMap] = useState<Map<string, string>>(new Map());
    const [hideChat, setHideChat] = useState<boolean>(true);
    const [messagesToShow, setMessagesToshow] = useState([]);
    const messagesFromAtom = useRecoilValue(Messages);

    const ref = useRef<null | HTMLDivElement>(null);

    useEffect(() => {

        setTimeout(() => {
            setHideChat(false);
        }, 300);

        axios.get('http://localhost:3000/api/larp/getAllUsers')
        .then(res => {

            res.data.data.users.forEach((user:user) => {
                setUserMap(new Map(userMap.set(user.ownerId, user.username)))
            });
        });

    }, []);



    useEffect(() => {

        let mappedMessages:any = messagesFromAtom.map((message, i) => {

            let date = new Date(message.timeCreated);
    
            var fullDate = date.toISOString().slice(0,10); //Format: "2014-05-12"
            let time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    
            let multiLineMsg = message.text.map((msg, i) => {

                //line break msg
                if(msg === ''){
                    return <p></p>;
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
                    <b>{fullDate.toString()} {time} - {userMap.get(message.ownerId)}: </b>
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

        if(showChat){
            setTimeout(() => {
                ref.current?.scrollIntoView({behavior: 'smooth'});
            }, 300);
        }

    }, [showChat]);
    

    return(
        <Container>
            
            <OverflowHidden>
                <ChatBox anim={showChat ? 'open' : 'close'} visibility={hideChat ? 'hide' : 'show'}>
                    {messagesToShow}
                    <div ref={ref}></div>
                </ChatBox>
            </OverflowHidden>

            <Button onClick={() => { setShowChat(!showChat) }} border={showChat ? 'hide' : 'show'}>{showChat ? 'Close Chat' : 'Open Chat'}</Button>

        </Container>
    );
}