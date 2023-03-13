import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentServiceName } from '../../api.constants';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  constructor(private httpClient: HttpClient, private httpService: HttpService) { }


}
