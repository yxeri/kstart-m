import { atom } from "recoil";
import { ITempMessage } from "../models/ITempMessage";

export const TempMessage = atom<ITempMessage>({
    key:'TempMessage',
    default:{
        text:[],
        timeCreated:'',
        ownerId:'',
        show:false
    }
});