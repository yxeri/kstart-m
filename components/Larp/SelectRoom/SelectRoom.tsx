import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SelectedRoom } from "../../../atoms/SelectedRoom";
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
    const [selectedRoom, setSelectedRoom] = useRecoilState(SelectedRoom);

    useEffect(() => {
        axios.get('http://localhost:3000/api/larp/getRooms')
        .then(res => {   
            
            res.data.data.rooms.forEach((room:roomFromAPI) => {
                setRooms(prev => [...prev, {roomName: room.roomName, roomId: room.objectId}]);
            });
        });

    }, []);



    function handleChangeRoomSelect(e:React.ChangeEvent<HTMLSelectElement>){

        let index = rooms.findIndex(obj => {
            

            if(obj.roomName === e.target.value){
                setSelectedRoom(obj.roomId);  
            }

            return obj.roomName === e.target.value;
        });

        setSelectedRoom(rooms[index].roomId);
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