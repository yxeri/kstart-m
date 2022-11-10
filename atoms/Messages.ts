import { atom } from 'recoil';
import { Message } from '../models/Message';

export const Messages = atom<Message[]>({
    key:'Messages',
    default:[]
});

