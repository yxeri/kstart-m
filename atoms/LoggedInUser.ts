import { atom } from "recoil";

interface SavedUser{
    token:string;
    ownerId:string;
}

export const LoggedInUser = atom<SavedUser>({
    key:'LoggedIn',
    default:{
        token:'',
        ownerId:''
    }
});