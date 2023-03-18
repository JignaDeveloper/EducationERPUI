import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { MastersService } from 'src/app/core/services/master/masters.service';
import { PaperTypeListQuery, PaperTypeModel } from 'src/app/model/master/paperTypeModel';

@Component({
  selector: 'app-papertype',
  templateUrl: './papertype.component.html',
  styleUrls: ['./papertype.component.scss']
})
export class PapertypeComponent {
  PaperTypeForm!: FormGroup;
  rowData: PaperTypeModel[] = [];
  getAccountListQuery: PaperTypeListQuery = new PaperTypeListQuery();
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

  constructor(private objFormBuilder: FormBuilder, private service: HttpService, private router: Router,  private masterService: MastersService) {
  }

  ColumnDefs = [
    { headerName: '#', field: 'srno',  headerTooltip: 'Sr. No', tooltipField: 'Sr. No', sortable: true, filter: true },
    { headerName: 'Paper Type', field: 'PaperType',  headerTooltip: 'Paper Type', tooltipField: 'Paper Type', sortable: true, filter: true},
    { headerName: 'Remarks', field: 'Remarks',  headerTooltip: 'Remarks', tooltipField: 'Remarks', sortable: true, filter: true},
    { headerName: 'Status', field: 'Status',  headerTooltip: 'Status', tooltipField: 'Status', sortable: true, filter: true},
  ];

  ngOnInit() {
    this.getPaperTypetList(this.getAccountListQuery);
    this.initForm();
  }

  getPaperTypetList(getPaperTypeListQuery: PaperTypeListQuery) {
    debugger;
    //this.spinner.show();
    getPaperTypeListQuery.skipCount = this.paginatorSkip;
    getPaperTypeListQuery.takeCount = this.paginatorTake;
    this.masterService.getPaperTypeList(getPaperTypeListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        this.rowData = [
          {
            "srno": 1,
            "PaperType": "Term",
            "Remarks": "",
            "Status": "Active"
          },
          {
            "srno": 2,
            "PaperType": "Practical",
            "Remarks": "",
            "Status": "InActive"
          },
          {
            "srno": 3,
            "PaperType": "Internal",
            "Remarks": "",
            "Status": "Active"
          },
          {
            "srno": 4,
            "PaperType": "Class Test",
            "Remarks": "",
            "Status": "InActive"
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
    this.PaperTypeForm = this.objFormBuilder.group({
      Paper_Type: ['', Validators.compose([Validators.required])],
      Status: ['', Validators.compose([Validators.required])],
      Remarks: ['', Validators.compose([Validators.required])]
    });
  }

  submit() {
    debugger;
    let tempData = this.PaperTypeForm.value
    const formData: FormData = new FormData();
    formData.append('Paper_Type', tempData.Paper_Type);
    formData.append('Status', tempData.Status);
    formData.append('Remarks', tempData.Remarks);
    // formData.append('CreatedDate', );
    // formData.append('CreatedBy', );

    //Save API Call
    alert('Paper Type Added Successfully.');
    this.PaperTypeForm.reset();
  }
}
