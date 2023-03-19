export class SubjectListQuery
{
  takeCount?:number;
  skipCount?:number;
}


export class SubjectModel {
  srno :number;
  Subject: string;
  ClassId: string;
  SectionId:string;
  PaperTypeId: string;
  IsOptional: string;
 }