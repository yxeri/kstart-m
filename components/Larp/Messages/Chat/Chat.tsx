import axios from "axios";
import { useEffect, useState } from "react";
import { Message } from "../../../../models/Message";


interface props{
    messages: Message[];
}

interface user{
    username:string;
    ownerId:string;
}

export default function Chat(props:props){

    const [users, setUsers] = useState<user[]>([]);

    let messages = props.messages;


    useEffect(() => {
        axios.get('http://localhost:3000/api/larp/getAllUsers')
        .then(res => {

            res.data.data.users.forEach((user:user) => {
                setUsers(prev => [...prev, {username:user.username, ownerId:user.ownerId}]);
            });
        });
    }, []);


    return(
        <>
            {messages.length < 1 && <p>No messages in this room.</p>}

                {messages.map((message, i) => {

                    let name = '';

                    users.forEach(user => {

                        if(message.ownerId === user.ownerId){
                            name = user.username;
                        }
                    });


                    let date = new Date(message.timeCreated);

                    var fullDate = date.toISOString().slice(0,10); //Format: "2014-05-12"
                    let time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

                    return(
                        <p key={i}>{fullDate.toString()} {time} - {name}: {message.text}</p>
                    );
            })}
        </>
    );
}