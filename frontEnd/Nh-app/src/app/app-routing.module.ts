import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AnonymousLayoutComponent } from './components/anonymous-layout/anonymous-layout.component';
import { AuthenticatedLayoutComponent } from './components/authenticated-layout/authenticated-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/registration/login/login.component';

const routes: Routes = [
  { path: '', component: AuthenticatedLayoutComponent, 
    children: [
    { path: '', redirectTo: 'alerts', pathMatch: 'full' },
    { path: 'staff', component: AddStaffComponent },
    { path: 'patient', component: AddPatientComponent },
  ] },
  { path: '', component: AnonymousLayoutComponent, children: [
    { path:'login', component: LoginComponent},
  ] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
