import { Status } from "../../golbalTypes/types";

export interface IteacherData {
     fullName: string,
             email: string,
             phoneNumber: string,
}
export interface IInstTeacherInitialState{
    teacherData: IteacherData,
    status: Status
}