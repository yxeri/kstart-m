import { atom } from 'recoil';
import { User } from '../models/User';

export const RHFUsers = atom<User[]>({
    key:'RHFUsers',
    default:[]
});

