import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './components/nav/dashboard/dashboard.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
import { RouterModule } from '@angular/router';
// import { EmployeeProfileCardComponent } from './employee-details-page/employee-profile-card/employee-profile-card.component';
// import { EmployeeVaccinationCardComponent } from './employee-details-page/employee-vaccination-card/employee-vaccination-card.component';
import { LoginPageComponent } from './components/authentication/login-page/login-page.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { AuthService } from './shared/services/auth/auth.service';
import { DataChartsModule } from './charts/data-charts.module';
import { EmployeeService } from './shared/services/employee/employee.service';
// import { EmployeesListComponent } from './components/employees-list/employees-list.component';
// import { DetailsFormComponent } from './employee-details-page/details-form/details-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { VaccinationFormComponent } from './components/vaccination-form/vaccination-form.component';
import { DiagnosisFormComponent } from './components/diagnosis-form/diagnosis-form.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomepageComponent } from './components/employee/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    DashboardComponent,
    EmployeeDetailsPageComponent,
    // EmployeeProfileCardComponent,
    // EmployeeVaccinationCardComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    // EmployeesListComponent,
    // DetailsFormComponent,
    VaccinationFormComponent,
    DiagnosisFormComponent,
    AdminComponent,
    EmployeeComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ChartsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    DataChartsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableExporterModule,
    PdfViewerModule,
    MDBBootstrapModule,
    CarouselModule,
    WavesModule,
    HttpClientModule,
    IvyCarouselModule
    
  ],
  providers: [AuthService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
