import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasteComponent } from './components/caste/caste.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PapertypeComponent } from './components/papertype/papertype.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { ReligionComponent } from './components/religion/religion.component';
import { SectionComponent } from './components/section/section.component';
import { StudentClassComponent } from './components/student-class/student-class.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { StudentComponent } from './components/student/student-list/student-list.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SecondaryFrequencyEnum } from './core/master-data';
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
      },
      {
        path: 'section', component: SectionComponent},
      // },
      {
        path: 'subject', component: SubjectComponent
      },
      {
        path: 'Religon', component: ReligionComponent
      },
      {
        path: 'caste', component: CasteComponent
      },
      {
        path: 'Profession', component: ProfessionComponent
      },
    ]
   }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
