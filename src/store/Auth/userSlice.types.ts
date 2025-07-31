import { Status } from "../golbalTypes/types"


export interface ILoginData{
    email: string,
     password: string
}

export interface IUserData{
    email: string,
     username: string,
        role: string
}
export interface IInitialState{
    user: IUserData,
    status: Status,
    isAuthenticated: boolean
}
export interface IRegisterData{
username: string,
email: string,
password: string
    }
export interface IInstituteRegister {
  instituteName: string;
  instituteEmail: string;
  institutePhoneNumber: string;
  instituteAddress: string;
  institutePanNo: string;
}
