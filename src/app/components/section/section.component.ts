import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SectionService } from 'src/app/core/services/master/section.service';
import { PaperTypeModel } from 'src/app/model/master/paperTypeModel';
import { SectionListQuery, SectionModel } from 'src/app/model/master/sectionModel';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  SectionForm!: FormGroup;
  rowData: SectionModel[] = [];
  getAccountListQuery: SectionListQuery = new SectionListQuery();
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
    { headerName: 'Class Name', field: 'ClassName',  headerTooltip: 'Class Name', tooltipField: 'Class Name', sortable: true, filter: true},
    { headerName: 'Section Name', field: 'SectionName',  headerTooltip: 'Section Name', tooltipField: 'Section Name', sortable: true, filter: true},
    //{ headerName: 'Teacher Id', field: 'TeacherId',  headerTooltip: 'Teacher Id', tooltipField: 'Teacher Id', sortable: true, filter: true},
    { headerName: 'Teacher Name', field: 'TeacherName',  headerTooltip: 'Teacher Name', tooltipField: 'Teacher Name', sortable: true, filter: true},
    { headerName: 'Remarks', field: 'Remarks',  headerTooltip: 'Remarks', tooltipField: 'Remarks', sortable: true, filter: true},
    { headerName: 'Status', field: 'Status',  headerTooltip: 'Status', tooltipField: 'Status', sortable: true, filter: true},
  ];

  ngOnInit() {
    this.getSectiontList(this.getAccountListQuery);
    this.initForm();
  }

  getSectiontList(sectionListQuery: SectionListQuery) {
    debugger;
    //this.spinner.show();
    sectionListQuery.skipCount = this.paginatorSkip;
    sectionListQuery.takeCount = this.paginatorTake;
    this.sectionService.getSectionList(sectionListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        this.rowData = [
          {
            "srno": 1,
            "ClassId": 1,
            "ClassName": "Class 1",
            "SectionName": "A",
            "TeacherName": "Komal Singh",
            "Remarks":"",
            "Status": "Active",
            "TeacherId":  1,
            "CreatedDate": new Date(),
            "CreatedBy": 1
          },
          {
            "srno": 1,
            "ClassId": 1,
            "ClassName": "Class 1",
            "SectionName": "B",
            "TeacherName": "Nandu Singh",
            "Remarks":"",
            "Status": "Active",
            "TeacherId":  1,
            "CreatedDate": new Date(),
            "CreatedBy": 1
          },
          {
            "srno": 1,
            "ClassId": 1,
            "ClassName": "Class 2",
            "SectionName": "A",
            "TeacherName": "Deepak Singh",
            "Remarks":"",
            "Status": "InActive",
            "TeacherId":  1,
            "CreatedDate": new Date(),
            "CreatedBy": 1
          },
          {
            "srno": 1,
            "ClassId": 1,
            "ClassName": "Class 3",
            "SectionName": "A",
            "TeacherName": "Rajesh Singh",
            "Remarks":"",
            "Status": "InActive",
            "TeacherId":  1,
            "CreatedDate": new Date(),
            "CreatedBy": 1
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
    this.SectionForm = this.objFormBuilder.group({
      ClassId: ['', Validators.compose([Validators.required])],
      SectionName: ['', Validators.compose([Validators.required])],
      TeacherId: ['', Validators.compose([Validators.required])],
      Status: ['', Validators.compose([Validators.required])],
      Remarks: ['', Validators.compose([Validators.required])]
    });
  }

  submit() {
    debugger;
    let tempData = this.SectionForm.value
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
    this.SectionForm.reset();
  }
}
