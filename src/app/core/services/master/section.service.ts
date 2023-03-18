import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseModel } from 'src/app/model/component/responseModel';
import { SectionListQuery } from 'src/app/model/master/sectionModel';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpClient: HttpClient, private httpService: HttpService) { }

  getSectionList(getSectionListQuery: SectionListQuery): Observable<ResponseModel> {
    const demoResponse: ResponseModel = {
      statusCode: 200,
      response: {
        SectionModel: []
      },
      message: 'Successfully retrieved student class list.'
    };
    return of(demoResponse);
  }
}
