import axios from "axios";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoggedInUser } from "../../../../atoms/LoggedInUser";
import { Messages } from "../../../../atoms/Messages";
import { SelectedRoom } from "../../../../atoms/SelectedRoom";
import { TempMessage } from "../../../../atoms/TempMessage";
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
    const loggedInUser = useRecoilValue(LoggedInUser);
    const [messages, setMessages] = useRecoilState(Messages);
    const [tempMessage, setTempMessage] = useRecoilState(TempMessage);
    const methods = useForm<Message>();


    async function onSubmit(msg:Message){

        let messageArray:string[] | string = msg.text;
        
        if(msg.text.includes('\n')){
            
            messageArray = msg.text.split(/\r?\n/);
        }
        else{
            messageArray = [msg.text];
        }


        setTempMessage({
            text: messageArray,
            timeCreated: new Date().toString(),
            ownerId: loggedInUser.ownerId,
            show: true
        });



        let res = await axios.post('http://localhost:3000/api/larp/sendMessage', {
            token: loggedInUser,
            message: messageArray,
            messageType: 'CHAT',
            roomId: selectedRoom
        });

        setMessages(prev => [...prev, {
            text: res.data.data.message.text,
            timeCreated: res.data.data.message.timeCreated,
            ownerId: res.data.data.message.ownerId
        }]);
        
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