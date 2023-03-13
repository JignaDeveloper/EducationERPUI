import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, retry } from 'rxjs';
import { ResponseModel } from 'src/app/model/component/responseModel';
import { StudentListQuery } from 'src/app/model/component/studentModel';
import { StudentServiceName } from '../../api.constants';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient, private httpService: HttpService) { }

  saveStudent(data: any) {
    return this.httpClient.post(StudentServiceName.AddStudent, data)
  }

  getStudentDetails(studentId: string) {
    return this.httpService.get(StudentServiceName.GetStudentDetails + "?studentId=" + studentId);
  }

  getStudentList(getStudentListQuery: StudentListQuery): Observable<ResponseModel> {
    const demoResponse: ResponseModel = {
      statusCode: 200,
      response: {
        StudentModel: [
          {
            StudentName: 'John Doe',
            Email: 'Computer Science'
          },
          {
            StudentName: 'Deepak',
            Email: 'Computer Science'
          }
        ]
      },
      message: 'Successfully retrieved student list.'
    };
    return of(demoResponse);
  }

  // getStudentList(getStudentListQuery: StudentListQuery): Observable<ResponseModel> {
  //   return this.httpClient.post<ResponseModel>(StudentServiceName.GetAllStudents, getStudentListQuery)
  //   .pipe(
  //     retry(1),
  //     map((res)=> {
  //       return res;
  //     })
  //   );
  // }

}
