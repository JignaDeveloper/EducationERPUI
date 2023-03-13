import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserServiceName } from '../api.constants';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient, private httpService: HttpService) { }

  public uploadDocuments(formData: FormData){
      return this.httpService.post(environment.userApiUrl,UserServiceName.uploadDocuments, formData);
    }
}
