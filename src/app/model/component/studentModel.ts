import { GuardianModel } from "./guardianModel";

export class StudentListQuery
{
  takeCount?:number;
  skipCount?:number;
}

export class StudentListRecords
{
  fromRange !: number;
  toRange!:number;
  totalRecords!:number;
  studentData ?: Object;
}

export class StudentModel {
  srno: number;
  StudentImagePath: string;
  StudentName: string;
  Gender: string;
  DOB: string;
  SectionName: string;
  Phone: string;
  GuardianName: string;
  Address: string;
  AcademicYear: string;
}
// export class StudentModel {
//     srno: number;
//     StudentId: number;
//     StudentName: string;
//     Gender: number;
//     //GenderList: any[];
//     DOB: string;
//     Guardian_Id: number;
//     GuardianName: string;
//     //GuardianList: any[];
//     BloodGroup_Id: number;
//     BloodGrpName: string;
//     //BloodGroupList: any[];
//     Religion_Id: number;
//     ReligionName: string;
//     //ReligionList: any[];
//     Email: string;
//     Phone: string;
//     Address: string;
//     City: string;
//     PinCode: string;
//     StateId: number;
//     //StateList: any[];
//     StateName: string;
//     Country: string;
//     ClassId: number;
//     //ClassList: any[];
//     ClassName: string;
//     SectionId: number;
//     //SectionList: any[];
//     SectionName: string;
//     SubjectGrpId: number;
//     SubjectGrpName: string;
//     //SubjectGrpList: any[];
//     RegistrationNo: string;
//     RollNo: number;
//     StudentImagePath: string;
//     StudentImageFile: any;
//     ExtraActivity: string;
//     Remarks: string;
//     Status: number;
//     UserName: string;
//     Password: string;
//     CreatedDate: Date;
//     CreatedBy: number;
//     //GuardianDetails: GuardianModel;
//   }