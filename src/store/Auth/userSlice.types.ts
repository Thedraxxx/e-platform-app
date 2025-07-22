import { Status } from "../golbalTypes/types"

export interface IInitialState{
    user: {
        email: string,
        token: string
    },
    status: Status
}
export interface ILoginData{
    email: string,
     password: string
}

export interface IUserData{
    email: string,
    token: string
}