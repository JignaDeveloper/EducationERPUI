import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { StudentComponent } from './components/student/student-list/student-list.component';
import { LoaderComponent } from './shared/layouts/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { AuthComponent } from './shared/layouts/app-layout/auth/auth.component';
import { MainComponent } from './shared/layouts/app-layout/main/main.component';
import { MaterialModule } from './shared/layouts/material/material.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './main/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './shared/layouts/nav-bar/nav-bar.component';
import {AgGridModule} from 'ag-grid-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import {AgGridComponent} from './components/ag-grid/ag-grid.component';
import { ImageCellRenderer } from './components/image-cell-renderer/image-cell-renderer.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { StudentClassComponent } from './components/student-class/student-class.component';
import { PapertypeComponent } from './components/papertype/papertype.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    MainComponent,
    DashboardComponent,
    NavBarComponent,
    NoteDetailComponent,
    AgGridComponent,
    ImageCellRenderer,
    StudentDetailsComponent,
    AddStudentComponent,
    StudentClassComponent,
    PapertypeComponent
  ],
  exports: [
    TranslateModule
  ],
  imports: [
    NgxSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateService,
        useFactory: httpTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [httpInterceptorProviders, HttpClient, HttpClientModule],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient):any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}