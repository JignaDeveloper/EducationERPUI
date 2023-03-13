import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { StudentComponent } from './components/student/student-list/student-list.component';
import { LoginComponent } from './main/auth/login/login.component';
import { studentClassModel } from './model/master/studentClassModel';
import { AuthComponent } from './shared/layouts/app-layout/auth/auth.component';
import { MainComponent } from './shared/layouts/app-layout/main/main.component';

// const routes: Routes = [
//   {
//    path:'',
//    component: LoginComponent
//   },
//   {
//     path:'dashboard',
//     component: DashboardComponent
//    }
// ];

const routes: Routes = [
   {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'', component: DashboardComponent
      },
      {
        path:'dashboard', component: DashboardComponent
      },
      {
        path: 'student', component: StudentComponent
      },
      {
        path: 'addstudent', component: AddStudentComponent
      }
    ]
   }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
