import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SectionService } from 'src/app/core/services/master/section.service';
import { ProfessionListQuery, ProfessionModel } from 'src/app/model/master/profession';
import { SectionListQuery, SectionModel } from 'src/app/model/master/sectionModel';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss']
})
export class ProfessionComponent {
  ProfessionForm!: FormGroup;
  rowData: ProfessionModel[] = [];
  getProfessionListQuery: ProfessionListQuery = new ProfessionListQuery();
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
    { headerName: 'profession name', field: 'ProfessionName',  headerTooltip: 'ProfessionName Name', tooltipField: 'ProfessionName Name', sortable: true, filter: true},
  ];

  ngOnInit() {
    this.getProfessionList(this.getProfessionListQuery);
    this.initForm();
  }

  getProfessionList(professionListQuery: ProfessionListQuery) {
    debugger;
    //this.spinner.show();
    professionListQuery.skipCount = this.paginatorSkip;
    professionListQuery.takeCount = this.paginatorTake;
    this.sectionService.getSectionList(professionListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        debugger;
        this.rowData = [
          {
            "srno": 1,
            "ProfessionName": "doctor"
           
          },
          {
            "srno": 2,
            "ProfessionName": "engineer"
          
          },
          {
            "srno": 3,
            "ProfessionName": "engineer"
         
          },
          {
            "srno": 4,
            "ProfessionName": "engineer"
         
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
    this.ProfessionForm = this.objFormBuilder.group({
      ProfessionName: ['', Validators.compose([Validators.required])]
    });
  }

  submit() {
    debugger;
    let tempData = this.ProfessionForm.value
    const formData: FormData = new FormData();
    formData.append('ClassId', tempData.ClassId);
    // formData.append('CreatedDate', );
    // formData.append('CreatedBy', );

    //Save API Call
    alert('Paper Type Added Successfully.');
    this.ProfessionForm.reset();
  }
}



