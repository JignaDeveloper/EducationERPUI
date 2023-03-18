import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PapertypeComponent } from './components/papertype/papertype.component';
import { StudentClassComponent } from './components/student-class/student-class.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { StudentComponent } from './components/student/student-list/student-list.component';
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
      },
      {
        path: 'studentclass', component: StudentClassComponent
      },
      {
        path: 'papertype', component: PapertypeComponent
      }
    ]
   }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
