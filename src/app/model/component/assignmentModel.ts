export class AssignmentModel {
    AssignmentId: number;
    srno: number;
    Title: string;
    Descriptions: string;
    ClassList: any[]; // change SelectList to any[] as it is specific to ASP.NET
    ClassName: string;
    ClassId: number;
    SectionList: any[]; // change SelectList to any[] as it is specific to ASP.NET
    SectionName: string;
    SectionId: number;
    SubjectList: any[]; // change SelectList to any[] as it is specific to ASP.NET
    SubjectName: string;
    SubjectId: number;
    DeadLine: string;
    AssignmentFile: File; // change HttpPostedFileBase to File as it is specific to ASP.NET
    AssignmentPath: string;
    CreatedDate: Date;
    CreatedBy: number;
    }