import { atom } from 'recoil';

export const SelectedRoom = atom<string>({
    key:'SelectedRoom',
    default:''
});

