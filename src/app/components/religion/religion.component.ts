import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SectionService } from 'src/app/core/services/master/section.service';
import { ReligionListQuery, ReligionModel } from 'src/app/model/master/religion';
import { SectionListQuery, SectionModel } from 'src/app/model/master/sectionModel';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.scss']
})
export class ReligionComponent {
  Religion!: FormGroup;
  rowData: ReligionModel[] = [];
  getReligionListQuery: ReligionListQuery = new ReligionListQuery();
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
    { headerName: 'Religion Name', field: 'ReligionName',  headerTooltip: 'Religion Name', tooltipField: 'Religion Name', sortable: true, filter: true},
  ];

  ngOnInit() {
    this.getReligionList(this.getReligionListQuery);
    this.initForm();
  }

  getReligionList(religionListQuery:ReligionListQuery) {
    debugger;
    //this.spinner.show();
    religionListQuery.skipCount = this.paginatorSkip;
    religionListQuery.takeCount = this.paginatorTake;
    this.sectionService.getSectionList(religionListQuery).subscribe(result => {
      if (result.statusCode == 200) {
        this.rowData = [
          {
            "srno": 1,
            "ReligionName":"hindi"
            
          },
          {
            "srno": 2,
            "ReligionName":"hindi"
            
          },
          {
            "srno": 3,
            "ReligionName":"hindi"
            
          },
          {
            "srno": 4,
            "ReligionName":"hindi"
            
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
    this.Religion = this.objFormBuilder.group({
      ReligionName: ['', Validators.compose([Validators.required])]
    });
  }

  submit() {
    debugger;
    let tempData = this.Religion.value
    const formData: FormData = new FormData();
    formData.append('ClassId', tempData.ClassId);
    // formData.append('CreatedDate', );
    // formData.append('CreatedBy', );

    //Save API Call
    alert('Paper Type Added Successfully.');
    this.Religion.reset();
  }
}


