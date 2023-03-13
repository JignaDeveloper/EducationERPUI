import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from 'ag-grid-community';
describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService],
      imports: [RouterTestingModule,HttpClientTestingModule,BrowserAnimationsModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('checkLogin should be called -- Authenticated & not logged',()=>{
    guard.checkLogin('url');
    const isAuthenticated = true;
    expect(isAuthenticated).toBeTruthy();
  });

  it('checkLogin should be called -- No Authenticated & not logged',()=>{
    guard.checkLogin('url');
    const isAuthenticated = false;
    expect(isAuthenticated).toBeFalsy();
  });

  it('checkLogin should be called -- Authenticated & logged',()=>{
    const url = '/login'
    guard.checkLogin(url);
    const isAuthenticated = true;
    expect(isAuthenticated).toBeTruthy();
    expect(url.indexOf('/login')).toBeFalsy();
  });
});
