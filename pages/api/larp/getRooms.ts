import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    let config = {
        headers:{
            Authorization: req.body.token
        }
    }

    try {
        let response = await axios.get('https://terminal.thethirdgift.com/api/rooms', config)

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