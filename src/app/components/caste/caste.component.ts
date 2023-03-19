import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SectionService } from 'src/app/core/services/master/section.service';
import { casteListQuery, CasteModel } from 'src/app/model/master/caste';
import { SectionListQuery, SectionModel } from 'src/app/model/master/sectionModel';

@Component({
  selector: 'app-caste',
  templateUrl: './caste.component.html',
  styleUrls: ['./caste.component.scss']
})
export class CasteComponent {
  casteForm!: FormGroup;
  rowData: CasteModel[] = [];
  getCasteListQuery: casteListQuery = new casteListQuery();
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
    { headerName: "Caste name", field: 'Caste',  headerTooltip: 'Class Name', tooltipField: 'Class Name', sortable: true, filter: true},
  ];

  ngOnInit() {
    this.getCastetList(this.getCasteListQuery);
    this.initForm();
  }

  getCastetList(castListQuery: casteListQuery) {
    debugger;
    //this.spinner.show();
    castListQuery.skipCount = this.paginatorSkip;
    castListQuery.takeCount = this.paginatorTake;
    this.sectionService.getSectionList(castListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        this.rowData = [
          {
            "Caste": "hindu2"
          },
          {
            "Caste": "hindu"
          },
          {
            "Caste": "jain"
          },
          {
            "Caste": "sikh"
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
    this.casteForm = this.objFormBuilder.group({
      Caste: ['', Validators.compose([Validators.required])]
    });
  }

  submit() {
    debugger;
    let tempData = this.casteForm.value
    const formData: FormData = new FormData();
    formData.append('ClassId', tempData.ClassId);
    // formData.append('CreatedDate', );
    // formData.append('CreatedBy', );

    //Save API Call
    alert('Paper Type Added Successfully.');
    this.casteForm.reset();
  }
}



