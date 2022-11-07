import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    console.log('req.body: ', req.body);
    
    const response = await fetch('https://terminal.thethirdgift.com/api/authenticate', {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },

        body: JSON.stringify(req.body.data)
    });

    // const response = await axios.post('https://terminal.thethirdgift.com/api/authenticate', req.body.data);

    console.log(response);
    
    res.send(response);
};