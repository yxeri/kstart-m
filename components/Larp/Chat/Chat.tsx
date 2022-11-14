import axios from "axios";
import { useEffect, useState } from "react";

import { keyframes, styled } from "../../../styles/stitches.config";
import ChatMessages from "./ChatMessages/ChatMessages";
import SendMessage from "./SendMessage/SendMessageForm";


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

const OverflowHidden = styled('div', {
    overflow:'hidden'
});

const Div = styled('div', {
    border:'2px solid $tertiary',
    overflow:'hidden',

    transformOrigin:'bottom right',

    variants:{
        anim:{
            close:{
                animation:`${close} 300ms ease-in-out forwards`
            },

            open:{
                animation:`${open} 300ms ease-in-out forwards`
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


export default function Chat(){

    const [showChat, setShowChat] = useState<boolean>(false);
    const [hideChat, setHideChat] = useState<boolean>(true);
    const [userMap, setUserMap] = useState<Map<string, string>>(new Map());
    
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

    return(
        <Container>
            <OverflowHidden>
                <Div anim={showChat ? 'open' : 'close'} visibility={hideChat ? 'hide' : 'show'}>
                    <ChatMessages showChat={showChat} userMap={userMap}></ChatMessages>
                    <SendMessage></SendMessage>
                </Div>
            </OverflowHidden>
            <Button onClick={() => { setShowChat(!showChat) }} border={showChat ? 'hide' : 'show'}>{showChat ? 'Close Chat' : 'Open Chat'}</Button>
        </Container>
    );
}