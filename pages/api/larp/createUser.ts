import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { AxiosError } from "axios";

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    const userData = {
        data: {
            user: {
                username: req.body.username,
                password: req.body.password,
                offName: req.body.offName
            }
        }
    }
    

    try{

        let response = await axios.post('https://terminal.thethirdgift.com/api/users', userData);
        res.send(response.data);
    }
    
    catch(error){

        const err = error as AxiosError;

        if(err){
            console.log('Axios Error: ' + err.response?.status + ' ' + err.code);
            res.send(err.response?.status);
        }
    }
    
    
    
};