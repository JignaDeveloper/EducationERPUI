import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SectionService } from 'src/app/core/services/master/section.service';
import { SectionListQuery, SectionModel } from 'src/app/model/master/sectionModel';
import { SubjectListQuery, SubjectModel } from 'src/app/model/master/subject';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {

  subjectForm!: FormGroup;
  rowData: SubjectModel[] = [];
  subjectListQuery: SubjectListQuery = new SubjectListQuery();
  paginatorTake: number = 20;
  paginatorSkip: number = 0;
  isStudentClassListPaginationEnable: boolean = true;
  selectPageNumber = new FormControl('20', []);
  toRange !: number;
  fromRange !: number;
  totalRecords!: number;
  studentListDisableForwardArrow: boolean = true;
  studentListDisableBackwardArrow: boolean = true;
  errorMessage: string = "";

  constructor(private objFormBuilder: FormBuilder, private service: HttpService, private router: Router,  private sectionService: SectionService) {
  }

  ColumnDefs = [
    { headerName: '#', field: 'srno',  headerTooltip: 'Sr. No', tooltipField: 'Sr. No', sortable: true, filter: true },
    //{ headerName: 'Class Id', field: 'ClassId',  headerTooltip: 'Class Id', tooltipField: 'Class Id', sortable: true, filter: true},
    { headerName: 'ClassId', field: 'ClassId',  headerTooltip: 'ClassId', tooltipField: 'ClassId', sortable: true, filter: true},
    { headerName: 'Subject', field: 'Subject',  headerTooltip: 'Subject', tooltipField: 'Subject', sortable: true, filter: true},
    //{ headerName: 'Teacher Id', field: 'TeacherId',  headerTooltip: 'Teacher Id', tooltipField: 'Teacher Id', sortable: true, filter: true},
    { headerName: 'IsOptional', field: 'IsOptional',  headerTooltip: 'IsOptional', tooltipField: 'IsOptional', sortable: true, filter: true},
    { headerName: 'SectionId', field: 'SectionId',  headerTooltip: 'SectionId', tooltipField: 'SectionId', sortable: true, filter: true},
    { headerName: 'PaperTypeId', field: 'PaperTypeId',  headerTooltip: 'Status', tooltipField: 'Status', sortable: true, filter: true},
  ];

  ngOnInit() {
    this.subjectList(this.subjectListQuery);
    this.initForm();
  }

  subjectList(subjectListQuery: SubjectListQuery) {
    debugger;
    //this.spinner.show();
    subjectListQuery.skipCount = this.paginatorSkip;
    subjectListQuery.takeCount = this.paginatorTake;
    this.sectionService.getSectionList(subjectListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        this.rowData = [
          {
            "srno": 1,
            "ClassId": "1",
            "Subject": "Class 1",
            "IsOptional": "B",
            "SectionId": "Nandu Singh",
            "PaperTypeId":"",
           
          },
          {
            "srno": 2,
            "ClassId": "1",
            "Subject": "Class 1",
            "IsOptional": "B",
            "SectionId": "Nandu Singh",
            "PaperTypeId":"",
           
          },
          {
            "srno": 3,
            "ClassId": "1",
            "Subject": "Class 1",
            "IsOptional": "B",
            "SectionId": "Nandu Singh",
            "PaperTypeId":"",
           
          },
          {
            "srno": 4,
            "ClassId": "1",
            "Subject": "Class 1",
            "IsOptional": "B",
            "SectionId": "Nandu Singh",
            "PaperTypeId":"",
           
          },
        ];
        

        this.totalRecords = 4;
        //this.totalRecords = studentRecords.length;
        //this.isStudentListPaginationEnable = studentRecords.length ? true : false
        this.isStudentClassListPaginationEnable = true;
        if (this.isStudentClassListPaginationEnable) {
          this.fromRange = 0;
          this.toRange = 10;
          if (this.toRange >= this.totalRecords) {
            this.studentListDisableForwardArrow = true;
          }
          else {
            this.studentListDisableForwardArrow = false;
          }
          if (this.fromRange <= 1) {
            this.studentListDisableBackwardArrow = true;
          } else {
            this.studentListDisableBackwardArrow = false;
          }
        }
      }
      //this.spinner.hide();
    })
  }

  initForm()
  {
    this.subjectForm = this.objFormBuilder.group({
      ClassId: ['', Validators.compose([Validators.required])],
      Subject: ['', Validators.compose([Validators.required])],
      IsOptional: ['', Validators.compose([Validators.required])],
      SectionId: ['', Validators.compose([Validators.required])],
      PaperTypeId: ['', Validators.compose([Validators.required])]
    });
  }

  submit() {
    debugger;
    let tempData = this.subjectForm.value
    const formData: FormData = new FormData();
    formData.append('ClassId', tempData.ClassId);
    formData.append('SectionName', tempData.SectionName);
    formData.append('TeacherId', tempData.TeacherId);
    formData.append('Status', tempData.Status);
    formData.append('Remarks', tempData.Remarks);
    // formData.append('CreatedDate', );
    // formData.append('CreatedBy', );

    //Save API Call
    alert('Paper Type Added Successfully.');
    this.subjectForm.reset();
  }
}

