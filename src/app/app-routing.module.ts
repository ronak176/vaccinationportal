import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LoginPageComponent } from './components/authentication/login-page/login-page.component';
import { DashboardComponent } from './components/nav/dashboard/dashboard.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './shared/guard/auth/auth.guard';
import { AdminGuard } from './shared/guard/admin.guard';
import { VaccinationFormComponent } from './components/vaccination-form/vaccination-form.component';
import { DiagnosisFormComponent } from './components/diagnosis-form/diagnosis-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomepageComponent } from './components/employee/homepage/homepage.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
//   { path: 'nav', component: NavComponent,canActivate: [AuthGuard],
//           children: [
//             { path: 'vform', component: VaccinationFormComponent},
//             { path: 'dform', component: DiagnosisFormComponent},
//              { path: 'dashboard', component: DashboardComponent},
//              { path: 'empdetails/:id', component: EmployeeDetailsPageComponent}
//           ]
// },
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
  children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'empdetails/:id', component: EmployeeDetailsPageComponent}
  ]},
  {path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard],
  children : [
    {path:'homepage', component: HomepageComponent},
    { path: 'vform', component: VaccinationFormComponent},
    { path: 'dform', component: DiagnosisFormComponent}
  ]},
  { path: 'login', component: LoginPageComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
