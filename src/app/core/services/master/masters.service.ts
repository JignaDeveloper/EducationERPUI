import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseModel } from 'src/app/model/component/responseModel';
import { PaperTypeListQuery } from 'src/app/model/master/paperTypeModel';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class MastersService {

  constructor(private httpClient: HttpClient, private httpService: HttpService) { }

  getPaperTypeList(getStudentClassListQuery: PaperTypeListQuery): Observable<ResponseModel> {
    const demoResponse: ResponseModel = {
      statusCode: 200,
      response: {
        PaperTypeModel: []
      },
      message: 'Successfully retrieved student class list.'
    };
    return of(demoResponse);
  }
}
