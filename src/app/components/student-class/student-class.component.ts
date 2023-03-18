import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { StudentClassService } from 'src/app/core/services/master/student-class.service';
import { StudentClassListQuery, StudentClassModel } from 'src/app/model/master/studentClassModel';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.scss']
})
export class StudentClassComponent implements OnInit {
  StudentClassForm!: FormGroup;
  rowData: StudentClassModel[] = [];
  getAccountListQuery: StudentClassListQuery = new StudentClassListQuery();
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

  constructor(private objFormBuilder: FormBuilder, private service: HttpService, private router: Router,  private studentClassService: StudentClassService,) {
  }

  ColumnDefs = [
    { headerName: '#', field: 'srno',  headerTooltip: 'Sr. No', tooltipField: 'Sr. No', sortable: true, filter: true },
    { headerName: 'Numeric Class', field: 'Numeric_Class',  headerTooltip: 'Numeric Class', tooltipField: 'Numeric Class', sortable: true, filter: true},
    { headerName: 'Display Class', field: 'Display_Class',  headerTooltip: 'Display Class', tooltipField: 'Display Class', sortable: true, filter: true},
    { headerName: 'Class Teacher', field: 'ClassTeacherName',  headerTooltip: 'Class Teacher', tooltipField: 'Class Teacher', sortable: true, filter: true},
    { headerName: 'Remarks', field: 'Remarks',  headerTooltip: 'Remarks', tooltipField: 'Remarks', sortable: true, filter: true},
  ];

  ngOnInit() {
    this.getStudentList(this.getAccountListQuery);
    this.initForm();
  }

  getStudentList(getStudentClassListQuery: StudentClassListQuery) {
    debugger;
    //this.spinner.show();
    getStudentClassListQuery.skipCount = this.paginatorSkip;
    getStudentClassListQuery.takeCount = this.paginatorTake;
    this.studentClassService.getStudentClassList(getStudentClassListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        this.rowData = [
          {
            "srno": 1,
            "Numeric_Class": "9",
            "Display_Class": "IX-A",
            "ClassTeacherName": "Ms. Sharma",
            "Remarks": "Good progress",
            "ClassId": 1,
            "CreatedDate" : new Date(),
            "CreatedBy" : 1,
            "ClassTeacherId" : 2
          },
          {
            "srno": 2,
            "Numeric_Class": "10",
            "Display_Class": "X-B",
            "ClassTeacherName": "Mr. Singh",
            "Remarks": "Needs improvement in math",
            "ClassId": 1,
            "CreatedDate" : new Date(),
            "CreatedBy" : 1,
            "ClassTeacherId" : 2
          },
          {
            "srno": 3,
            "Numeric_Class": "7",
            "Display_Class": "VII-C",
            "ClassTeacherName": "Ms. Gupta",
            "Remarks": "Excellent participation in class",
            "ClassId": 1,
            "CreatedDate" : new Date(),
            "CreatedBy" : 1,
            "ClassTeacherId" : 2
          },
          {
            "srno": 4,
            "Numeric_Class": "12",
            "Display_Class": "XII-A",
            "ClassTeacherName": "Ms. Khan",
            "Remarks": "Outstanding performance in science",
            "ClassId": 1,
            "CreatedDate" : new Date(),
            "CreatedBy" : 1,
            "ClassTeacherId" : 2
          },
          {
            "srno": 5,
            "Numeric_Class": "8",
            "Display_Class": "VIII-B",
            "ClassTeacherName": "Mr. Patel",
            "Remarks": "Improvement needed in English writing skills",
            "ClassId": 1,
            "CreatedDate" : new Date(),
            "CreatedBy" : 1,
            "ClassTeacherId" : 2
          }
        ];
        

        this.totalRecords = 5;
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
    this.StudentClassForm = this.objFormBuilder.group({
      Numeric_Class: ['', Validators.compose([Validators.required])],
      Display_Class: ['', Validators.compose([Validators.required])],
      Remarks: ['', Validators.compose([Validators.required])]
      //ClassTeacherId
      //CreatedDate
      //CreatedBy
    });
  }

  submit() {
    debugger;
    let tempData = this.StudentClassForm.value
    const formData: FormData = new FormData();
    formData.append('Numeric_Class', tempData.Numeric_Class);
    formData.append('Display_Class', tempData.Display_Class);
    formData.append('Remarks', tempData.Remarks);
    // formData.append('CreatedDate', );
    // formData.append('CreatedBy', );

    //Save API Call
    alert('Student Class Added Successfully.');
  }
}
