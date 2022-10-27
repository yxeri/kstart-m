import { atom } from 'recoil';
import { User } from '../models/User';

export const usersRHF = atom<User>({
    key:'usersRHF',
    default:[]
})

