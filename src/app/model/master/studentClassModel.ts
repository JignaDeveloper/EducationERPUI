export class StudentClassListQuery
{
  takeCount?:number;
  skipCount?:number;
}


export class StudentClassModel {
    srno: number;
    ClassId: number;
    Numeric_Class: string;
    Display_Class: string;
    ClassTeacherName: string;
    ClassTeacherId: number;
    Remarks: string;
    CreatedDate: Date;
    CreatedBy: number;
}
