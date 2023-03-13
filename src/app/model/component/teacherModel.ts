
export class TeacherModel {
  srno: number;
  TeacherId: number;
  RegistrationNo: string;
  TeacherName: string;
  Designation: string;
  DOB: string;
  Gender: number;
  GenderList: any[];
  ReligionName: string;
  ReligionList: any[];
  Religion_Id: number;
  BloodGroup_Name: string;
  BloodGroupList: any[];
  BloodGroup_Id: number;
  Email: string;
  Phone: string;
  Address: string;
  City: string;
  PinCode: string;
  StateId: number;
  StateName: string;
  StateList: any[];
  Country: string;
  JoiningDate: string;
  TeacherImagePath: string;
  TeacherImageFile: File;
  UserName: string;
  Password: string;
  Status: number;
  CreatedDate: Date;
  CreatedBy: number;
}