import { atom } from "recoil";

interface SavedUser{
    token:string;
    userId:string;
}

export const LoggedInUser = atom<SavedUser>({
    key:'LoggedIn',
    default:{
        token:'',
        userId:''
    }
});