import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AuthenticatedLayoutComponent } from './components/authenticated-layout/authenticated-layout.component';
import { AnonymousLayoutComponent } from './components/anonymous-layout/anonymous-layout.component';
import { LoginComponent } from './components/registration/login/login.component';
import { AuthorizeViewComponent } from './security/authorize-view/authorize-view.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddPatientComponent,
    AddStaffComponent,
    AlertsComponent,
    AuthenticatedLayoutComponent,
    AnonymousLayoutComponent,
    LoginComponent,
    AuthorizeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavBarComponent,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
