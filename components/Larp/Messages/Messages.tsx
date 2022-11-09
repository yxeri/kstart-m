import axios from "axios";
import React, { useEffect, useState } from "react";
import { Message } from "../../../models/Message";
import { styled } from "../../../styles/stitches.config";
import Chat from "./Chat/Chat";

const Div = styled('div', {

});

const Select = styled('select', {

});

interface props{
    userData:{
        token:string;
        userId:string;
        username:string;
    }
}

interface room{
    roomName:string;
    roomId:string;
}

interface roomFromAPI{
    roomName:string;
    objectId:string;
}


export default function Messages(props:props){

    const [rooms, setRooms] = useState<room[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/larp/getRooms')
        .then(res => {   
            
            res.data.data.rooms.forEach((room:roomFromAPI) => {
                setRooms(prev => [...prev, {roomName: room.roomName, roomId: room.objectId}]);
            });
        });

    }, []);


    async function handleChangeRoomSelect(e:React.ChangeEvent<HTMLSelectElement>){

        let index = rooms.findIndex(obj => {
            return obj.roomName === e.target.value;
        });

        let res = await axios.post('http://localhost:3000/api/larp/getMessages', {token:props.userData.token, roomId:rooms[index].roomId});

        console.log(res);
        
        if(res.data.data && res.data.data.messages){

            res.data.data.messages.forEach((message:Message) => {
                setMessages(prev => [...prev, {text:message.text, timeCreated:message.timeCreated, ownerId:message.ownerId}]);
            });
        }
        else{
            setMessages([]);
        }
    }


    return(
        <Div>
            <h2>Select room</h2>
            <Select onChange={handleChangeRoomSelect} defaultValue="DEFAULT">
                <option value="DEFAULT" disabled hidden>Select room</option>
                {rooms.map((room, i) => {
                    return(
                        <option value={room.roomName} key={i}>{room.roomName}</option>
                    );
                })}
            </Select>

            <Chat messages={messages}></Chat>
        </Div>
    );
}