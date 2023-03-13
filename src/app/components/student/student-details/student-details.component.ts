import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from 'src/app/model/component/studentModel';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  
  myParam: any;
  studentId!: number;
  studentDetails : StudentModel;

  constructor(private activateRoute: ActivatedRoute)
  {
    this.studentId = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.myParam = params.get("id");
      this.getStudentDetails(this.myParam);
    })
  }

  getStudentDetails(studentId: number)
  {
    //this.spinner.show();
    const id = +this.studentId
    // if(isNaN(id))
    // {
    //   this.authGuard.logOut();
    // }

    // call API service

    this.studentDetails.StudentName =  "studentId"

  }

}
