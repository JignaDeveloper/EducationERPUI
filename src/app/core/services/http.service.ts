import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public post(serviceNameWithUrl: string, modal: any) {
    return this.http.post<any>(serviceNameWithUrl, modal)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  
  public get(serviceNameWithUrl: string) {
    return this.http.get<any>(serviceNameWithUrl)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
