import { atom } from "recoil";
import { User } from "../models/User";

export const Users = atom<User[]>({
    key:'Users',
    default:[]
})