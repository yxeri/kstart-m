import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { AxiosError } from "axios";

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    let config = {
        headers:{
            Authorization: req.body.token
        }
    }

    try{
        let response = await axios.delete('https://terminal.thethirdgift.com/api/users/' + req.body.userId, config);

        res.send(response.data);
    }
    
    catch(error){

        const err = error as AxiosError;

        if(err){
            console.log('Axios Error:', err.response?.status);
            res.send(err.response?.status);
        }
    }
    
};