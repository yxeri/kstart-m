import { atom } from "recoil";
import { Message } from "../models/Message";

export const SentMessage = atom<Message>({
    key:'SentMessage',
    default: undefined
});