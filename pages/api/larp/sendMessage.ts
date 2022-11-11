import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    let config = {
        headers:{
            Authorization: req.body.token
        }
    }

    let messageData = {
        data:{
            message:{
                text: req.body.message,
                roomId: req.body.roomId
            },
            messageType: req.body.messageType,
            roomId: req.body.roomId  
        }
    }

    console.log(req.body);
    

    try {
        let response = await axios.post('https://terminal.thethirdgift.com/api/messages', messageData, config);

        res.send(response.data);
    }
    
    catch (error) {

        const err = error as AxiosError;
        
        if(err){
            console.log('Axios Error:', err.response?.status);
            res.send(err.response?.status);
        }
    }
}