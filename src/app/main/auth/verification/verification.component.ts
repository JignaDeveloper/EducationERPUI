import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/authGuard/auth.guard';
import { AppServiceService } from 'src/app/core/services/app-service.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
})
export class VerificationComponent implements OnInit {

  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private localStorage: LocalStorageService, private appService: AppServiceService, private authService: AuthServiceService, private authGuard: AuthGuard) { }

  ngOnInit(): void {     
    this.activatedRoute.queryParams.subscribe(params => { 
      const code = params['code'];      
      this.authService.getAccessToken(code).subscribe(res => { 
        if(res.statusCode === HttpStatusCode.Ok){     
          this.localStorage.set("accessToken", res.response.accessToken);
          this.localStorage.set("idToken", res.response.idToken);
          this.localStorage.set("refreshToken", res.response.refreshToken);
          this.appService.setUserLoggedIn(true);
         
          this.authService.getCurrentUserDetails().subscribe(result => {
            alert(result);
            if(result.statusCode === HttpStatusCode.Ok){
              this.localStorage.set("userDetails", JSON.stringify(result.response)); 
              this.localStorage.set("isFirstLogin", "false");       
            }
            else if(result.statusCode === HttpStatusCode.Created)
            {
              this.localStorage.set("userDetails", JSON.stringify(result.response));
              this.localStorage.set("isFirstLogin", "true");  
            }
            this.router.navigate(['main/home/deduction-account-list']);
          })
          
        } else{
          this.appService.setUserLoggedIn(false);
          this.authGuard.logOut();
        }                    
      });
    })           
  }

}
