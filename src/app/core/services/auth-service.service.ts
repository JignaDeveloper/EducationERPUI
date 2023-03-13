import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiConstants } from '../api.constants';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpService: HttpService, private localStorage: LocalStorageService) { }

  public getAccessToken(payLoad: string){  
    debugger;
    return  this.httpService.get(environment.authApiUrl,apiConstants.getAccessToken + '?code=' + payLoad);
  }

  public refreshIDToken(payLoad: string){   
    return  this.httpService.get(environment.authApiUrl,apiConstants.refreshIdToken + '?refreshToken=' + payLoad);
  }
  
  getAuthStatus(){
    const accessToken = this.localStorage.get('accessToken');
    const token = this.localStorage.get('idToken');      
    if(accessToken && token){
      return true;
    }
    return false;
   }

   public getCurrentUserDetails(){   
    return  this.httpService.get(environment.employeeApiUrl,apiConstants.getCurrentUserDetails)
   }

}
