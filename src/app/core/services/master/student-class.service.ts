import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseModel } from 'src/app/model/component/responseModel';
import { StudentClassListQuery } from 'src/app/model/master/studentClassModel';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  constructor(private httpClient: HttpClient, private httpService: HttpService) { }

  getStudentClassList(getStudentClassListQuery: StudentClassListQuery): Observable<ResponseModel> {
    const demoResponse: ResponseModel = {
      statusCode: 200,
      response: {
        StudentClassModel: []
      },
      message: 'Successfully retrieved student class list.'
    };
    return of(demoResponse);
  }

}
