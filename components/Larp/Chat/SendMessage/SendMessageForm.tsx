import axios from "axios";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { SelectedRoom } from "../../../../atoms/SelectedRoom";
import { styled } from "../../../../styles/stitches.config";
import Textarea from "./Textarea";


interface Message{
    text:string;
}


const Form = styled('form', {
    display:'flex',
    background:'$primary',
    borderTop:'2px solid $tertiary',
});

const Button = styled('button', {
    width:75,
    backgroundColor:'$primary',
    color:'$tertiary',
    border:'none',
    borderLeft:'2px solid $tertiary',
    cursor:'pointer',

    '&:hover':{backgroundColor:'$secondary'}
});


export default function SendMessageForm(){

    const selectedRoom = useRecoilValue(SelectedRoom);
    const methods = useForm<Message>();


    async function onSubmit(msg:Message){

        let messageArray:string[] | string = msg.text;
        
        if(msg.text.includes('\n')){
            
            messageArray = msg.text.split(/\r?\n/);
        }
        else{
            messageArray = [msg.text];
        }

        let res = await axios.post('http://localhost:3000/api/larp/sendMessage', {
            token: localStorage.getItem('user'),
            message: messageArray,
            messageType: 'CHAT',
            roomId: selectedRoom
        });

        console.log(res);
        

        methods.reset();
    }


    return(
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Textarea name="text"></Textarea>
                <Button type="submit">Send</Button>
            </Form>
        </FormProvider>
    );
}