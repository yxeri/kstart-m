import { atom } from "recoil";

export const ShowCreateUserModal = atom<boolean>({
    key:'ShowCreateUserModal',
    default:false
});