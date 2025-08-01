import { Status } from "../golbalTypes/types";

export interface IInstituteUserInfo {
       instituteName: string;
  instituteEmail: string;
  institutePhoneNumber: string;
  instituteAddress: string;
}  

export interface IInstituteInitialState{
       user: IInstituteUserInfo,
       status: Status
}

 export interface IInsttituteRegister {
      instituteName: string;
  instituteEmail: string;
  institutePhoneNumber: string;
  instituteAddress: string;
  institutePanNo: string;
  instituteVatNo: string;
}