import { atom } from "recoil";

export const DarkMode = atom<Boolean>({
    key:'DarkMode',
    default:false
});