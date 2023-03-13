import { Component, OnInit } from '@angular/core';
import { StudentListQuery, StudentListRecords, StudentModel } from 'src/app/model/component/studentModel';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { StudentService } from 'src/app/core/services/component/student.service';
import { Router } from '@angular/router';
import { ImageCellRenderer } from '../../image-cell-renderer/image-cell-renderer.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})


export class StudentComponent implements OnInit {
  rowData: StudentModel[] = [];
  getAccountListQuery: StudentListQuery = new StudentListQuery();
  studentListNoRowsTemplate: any;
  paginatorTake: number = 20;
  paginatorSkip: number = 0;
  isStudentListPaginationEnable: boolean = true;
  selectPageNumber = new FormControl('20', []);
  toRange !: number;
  fromRange !: number;
  totalRecords!: number;
  studentListDisableForwardArrow: boolean = true;
  studentListDisableBackwardArrow: boolean = true;


  constructor(private spinner: NgxSpinnerService, private localStorage: LocalStorageService, private studentService: StudentService, private router: Router) {
    this.studentListNoRowsTemplate = "<span>No_Records_to_display</span>";
  }

  ColumnDefs = [
    { headerName: '#', field: 'srno',  headerTooltip: 'Student Sr. No', tooltipField: 'Student Sr. No', sortable: true, filter: true },
    { headerName: 'Photo', field: 'StudentImagePath',  headerTooltip: 'Student Photo', tooltipField: 'Student Photo',   cellRendererFramework: ImageCellRenderer, sortable: true, resizable: true, filter: true},
    { headerName: 'Student Name', field: 'StudentName',  headerTooltip: 'Student Name', tooltipField: 'Student Name', sortable: true, filter: true},
    { headerName: 'Gender', field: 'Gender',  headerTooltip: 'Gender', tooltipField: 'Gender', sortable: true, filter: true},
    { headerName: 'DOB', field: 'DOB',  headerTooltip: 'Date Of Birth', tooltipField: 'Date Of Birth', sortable: true, filter: true},
    { headerName: 'Class (Section)', field: 'SectionName',  headerTooltip: 'Section Name', tooltipField: 'Section Name', sortable: true, filter: true},
    { headerName: 'Phone', field: 'Phone',  headerTooltip: 'Phone', tooltipField: 'Phone', sortable: true, filter: true},
    { headerName: 'Guardian Name', field: 'GuardianName',  headerTooltip: 'Guardian Name', tooltipField: 'Guardian Name', sortable: true, filter: true},
    { headerName: 'Address', field: 'Address',  headerTooltip: 'Address', tooltipField: 'Address', sortable: true, filter: true},
    { headerName: 'Academic Year', field: 'AcademicYear',  headerTooltip: 'Academic Year', tooltipField: 'Academic Year', sortable: true, filter: true},
    //{ headerName: 'Action', field: 'Email',  headerTooltip: 'Email', tooltipField: 'Email', sortable: true, filter: true}
  ];


  studentListOnGridSizeChanged(params: { api: { sizeColumnsToFit: () => void; }; }): void {
    debugger;
    params.api.sizeColumnsToFit();
  }

  ngOnInit(): void {
    this.getStudentList(this.getAccountListQuery);
  }

  getStudentList(getStudentListQuery: StudentListQuery) {
    debugger;
    //this.spinner.show();
    getStudentListQuery.skipCount = this.paginatorSkip;
    getStudentListQuery.takeCount = this.paginatorTake;
    this.studentService.getStudentList(getStudentListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        let studentRecords = <StudentModel[]>result.response;
        this.rowData = [  {    "srno": 1,    "StudentImagePath": "/assets/images/avatar2.png",    "StudentName": "John Smith",    "Gender": "Male",    "DOB": "1998-05-23",    "SectionName": "Class 10 (A)",    "Phone": "+1 555-123-4567",    "GuardianName": "Mary Smith",    "Address": "123 Main St, Anytown USA",    "AcademicYear": "2022-2023"  },  {    "srno": 2,    "StudentImagePath": "/assets/images/avatar2.png",    "StudentName": "Jane Doe",    "Gender": "Female",    "DOB": "1999-01-15",    "SectionName": "Class 11 (B)",    "Phone": "+1 555-987-6543",    "GuardianName": "John Doe",    "Address": "456 Elm St, Anytown USA",    "AcademicYear": "2022-2023"  },  {    "srno": 3,    "StudentImagePath": "/assets/images/avatar2.png",    "StudentName": "Bob Johnson",    "Gender": "Male",    "DOB": "2000-08-01",    "SectionName": "Class 9 (C)",    "Phone": "+1 555-555-1212",    "GuardianName": "Alice Johnson",    "Address": "789 Oak St, Anytown USA",    "AcademicYear": "2022-2023"  }];

        this.totalRecords = 3;
        //this.totalRecords = studentRecords.length;
        //this.isStudentListPaginationEnable = studentRecords.length ? true : false
        this.isStudentListPaginationEnable = true;
        if (this.isStudentListPaginationEnable) {
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

  studentListFetchPreviousRecords() {
    if (!this.studentListDisableBackwardArrow) {
      this.paginatorSkip = this.paginatorSkip - this.paginatorTake;
      this.getStudentList(this.getAccountListQuery);
    }
  }

  studentListFetchNextRecords() {
    if (!this.studentListDisableForwardArrow) {
      this.paginatorSkip = this.paginatorSkip + this.paginatorTake;
      this.getStudentList(this.getAccountListQuery);
    }
  }

  studentListPageSizedUpdated(e: any) {
    this.paginatorTake = Number(e);
    this.paginatorSkip = 0;
    this.getStudentList(this.getAccountListQuery);
  }

  onRowClicked(event: any): void {
    debugger;
    this.router.navigateByUrl('/src/components/student/student-details/' + event.data.srno);
  }

  //onRowClicked(event: any) {$("#imagemodal").modal("show");}
  

}
