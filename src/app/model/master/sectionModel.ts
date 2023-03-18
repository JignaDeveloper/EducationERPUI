export class SectionListQuery
{
  takeCount?:number;
  skipCount?:number;
}

export class SectionModel {
    srno: number;
    //SectionId: number;
    SectionName: string;
    //Category: string;
    //Capacity: number;
    ClassId: number;
    ClassName: string;
    TeacherId: number;
    TeacherName:string;
    Remarks: string;
    Status : string; //change to number
    CreatedDate: Date;
    CreatedBy: number;
}