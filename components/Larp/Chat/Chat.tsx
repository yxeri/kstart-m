import axios from "axios";
import { useEffect, useState } from "react";
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

const NoOverflow = styled('div', {
    overflow:'hidden'
});

const Button = styled('button', {
    width:'50%',
    height:50,
    float:'right',
    backgroundColor:'$primary',
    color:'$tertiary',
    borderTop:'2px solid $tertiary',
    borderRight:'2px solid $tertiary',
    borderLeft:'2px solid $tertiary',
    cursor:'pointer',

    '&:hover':{backgroundColor:'$secondary'}
});

const open = keyframes({
    '0%':{
        transformOrigin:'bottom right',
        transform:'translate(100%, 100%)'
    },
    '100%':{
        transform:'translate(0%, 0%)'
    }
});

const ChatBox = styled('div', {
    width:'100%',
    height:600,
    overflow:'auto',
    padding:10,
    backgroundColor:'$primary',
    color:'$tertiary',
    border:'2px solid $tertiary',
    boxSizing:'border-box',
    animation:`${open} 500ms ease-out forwards`
});


const ChatMessage = styled('p', {
    overflowWrap:'break-word',
});

const MultiLineMsg = styled('span', {
    display:'block',
});

export default function Chat(){

    const [showChat, setShowChat] = useState(false);
    const [userMap, setUserMap] = useState<Map<string, string>>(new Map());
    const messages = useRecoilValue(Messages);
    console.log(messages);
    

    useEffect(() => {
        axios.get('http://localhost:3000/api/larp/getAllUsers')
        .then(res => {

            res.data.data.users.forEach((user:user) => {
                setUserMap(new Map(userMap.set(user.ownerId, user.username)))
            });
        });

    }, []);



    let mappedMessages:any = messages.map((message, i) => {

        let date = new Date(message.timeCreated);

        var fullDate = date.toISOString().slice(0,10); //Format: "2014-05-12"
        let time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

        let multiLineMsg = message.text.map((msg, index) => {

            if(index === 0){

                return(msg);
            }

            else{

                return(
                    <MultiLineMsg>
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

    if(messages.length < 1){

        mappedMessages = <p>No messages in this room.</p>;
    }


    return(
        <Container>
            
            {showChat &&
                <NoOverflow>
                    <ChatBox>
                        {mappedMessages}
                    </ChatBox>
                </NoOverflow>
            }

            <Button onClick={() => {setShowChat(!showChat)}}>{showChat ? 'Close Chat' : 'Open Chat'}</Button>

        </Container>
    );
}