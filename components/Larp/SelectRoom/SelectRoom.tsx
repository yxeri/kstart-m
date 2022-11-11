import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Messages } from "../../../atoms/Messages";
import { Message } from "../../../models/Message";
import { styled } from "../../../styles/stitches.config";

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

const Div = styled('div', {
    width:'fit-content',
    margin:'auto',
    marginTop:10,
    padding:20,
    borderRadius:10,
    backgroundColor:'$primary',
    color:'$tertiary',
    border:'2px solid $tertiary'
})

const H2 = styled('h2', {
    textAlign:'center'
});

const Select = styled('select', {

});


export default function SelectRoom(props:props){

    const [rooms, setRooms] = useState<room[]>([]);
    const [messages, setMessages] = useRecoilState<Message[]>(Messages);

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
            <H2>Select chatroom</H2>
            <Select onChange={handleChangeRoomSelect} defaultValue="DEFAULT">
                <option value="DEFAULT" disabled hidden>Select room</option>
                {rooms.map((room, i) => {
                    return(
                        <option value={room.roomName} key={i}>{room.roomName}</option>
                    );
                })}
            </Select>
        </Div>
    );
}