import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { AxiosError } from "axios";

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    const userData = {
        data: {
            user: {
                username: req.body.username,
                password: req.body.password
            }
        }
    }
    

    try{

        let response = await axios.post('https://terminal.thethirdgift.com/api/authenticate', userData);
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