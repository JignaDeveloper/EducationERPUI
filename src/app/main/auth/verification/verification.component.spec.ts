import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationComponent } from './verification.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('VerificationComponent', () => {
  let component: VerificationComponent;
  let fixture: ComponentFixture<VerificationComponent>;
  let httpMock: HttpTestingController
  var mockData={
    statusCode:200,
    response:{
      accessToken:"testing",
      idToken:"testing2",
      refreshToken:"testing3"
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [AuthServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              code: "23652355",
            })
          }
        }
      ]
    })
    .compileComponents();
    httpMock = TestBed.inject(HttpTestingController)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    var req = httpMock.expectOne(environment.authApiUrl+"Auth/GetAcessToken?code="+23652355);
    req.flush(mockData);
  });
  afterAll(()=>{
    localStorage.clear()
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Data storing in Local Storage', () => {
    expect(localStorage.getItem("idToken")).toEqual(mockData.response.idToken)
    expect(localStorage.getItem("accessToken")).toEqual(mockData.response.accessToken)
    expect(localStorage.getItem("refreshToken")).toEqual(mockData.response.refreshToken)
    expect(200).toEqual(mockData.statusCode)
  });
});
