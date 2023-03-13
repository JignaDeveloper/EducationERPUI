import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient, private httpService: HttpService) { }

  // autoCompleteFilter(fullName: string): Observable<any> {   
  //   const opts = { 'fullName': fullName, 'isAutoComplete': true, 'takeCount': 0, 'skipCount': 0 }
  //   return this.httpClient.post<any>( EmployeeServiceName.GetEmployeeNameQuickSearch, opts)
  //     .pipe(
  //       retry(1),
  //       map((res) => {
  //         return res;
  //       })
  //     );
  // }

  // getUserNameFilter(fullName: string, takeCount: number, skipCount: number): Observable<any> {    
  //   const opts = { 'fullName': fullName, 'isAutoComplete': false, 'takeCount': takeCount, 'skipCount': skipCount }
  //   return this.httpClient.post<any>(EmployeeServiceName.GetEmployeeNameQuickSearch, opts)
  //     .pipe(
  //       retry(1),
  //       map((res) => {
  //         return res;
  //       })
  //     );
  // }

  // checkEmail(email: any) {
  //   return this.httpClient.get(EmployeeServiceName.CheckEmployeeEmailExist + email,{responseType:"text"})
  // }

  // checkEmployeeNumber(employeeNumber: any) {
  //   return this.httpClient.get(EmployeeServiceName.CheckEmployeeNumberExist + employeeNumber)
  // }

  // saveEmployee(data: any) {
  //   return this.httpClient.post(EmployeeServiceName.AddEmployee, data)
  // }

  // getAllEmployeeList(skip: number, take: number): Observable<EmployeeResultModel> {
  //   const opts = { 'takeCount': take, 'skipCount': skip }
  //   return this.httpClient.post<EmployeeResultModel>( EmployeeServiceName.GetAllEmployees, opts)
  //     .pipe(
  //       retry(1),
  //       map((res) => {
  //         return res;
  //       })
  //     );
  // }

  // updateEmployee(data: EditEmployeeModel) {
  //   return this.httpClient.post(EmployeeServiceName.UpdateEmployeeById, data)
  // }

  // getEmployeeDetails(payLoad: string){
  //   return this.httpService.get(environment.employeeApiUrl, EmployeeServiceName.getEmployeeDetails + "?employeeId=" + payLoad );
  // }

  // getEmployeeDetailsForEdit(payLoad: string){
  //   return this.httpService.get(environment.employeeApiUrl,EmployeeServiceName.getEmployeeDetailForEdit + "?employeeId=" + payLoad );
  // }

  // getDedcutionNameFilter(getDeductionNameFilterQuery: any) {
  //   return this.httpClient.get<GetDeductionNameList>( EmployeeServiceName.GetDeductionNameAutocomplete + "?deductionName=" + getDeductionNameFilterQuery)
  //     .pipe(
  //       retry(1),
  //       map((res) => {
  //         return res;
  //       })
  //     );
  // }

  // getProtectionScheduleBoundAmount(payFrequency:number) {
  //   return this.httpClient.get( EmployeeServiceName.GetProtectionScheduleAmount + "?payFrequency=" + payFrequency)
  //     .pipe(
  //       retry(1),
  //       map((res) => {
  //         return res;
  //       })
  //     );
  // }

}
