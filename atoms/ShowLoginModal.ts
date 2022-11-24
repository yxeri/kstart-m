import { atom } from "recoil";

export const ShowLoginModal = atom<boolean>({
    key:'ShowLoginModal',
    default:false
});