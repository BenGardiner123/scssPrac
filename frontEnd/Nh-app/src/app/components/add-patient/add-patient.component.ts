import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patientInformationForm: FormGroup;
  titles: any = ['Mr', 'Mrs', 'Dr']
  genders: any = ['M', 'F']
  countryOfBirths: any = ['Here', 'There']
  preferredLanguages: any = ['English', 'Gibberish']
  success:boolean = false;
  fail:boolean = false;

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void{
    this.initializeForm();
  }

  initializeForm(): void{
    this.patientInformationForm = this.fb.group({
    title: ['', Validators.required],
    hospitalNumber: ['', Validators.required],
    givenName: ['', Validators.required],
    familyName: ['', Validators.required],
    gender: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    countryOfBirth: ['', Validators.required],
    preferredLanguage: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    suburb: ['', Validators.required],
    postcode: ['', Validators.required],
    mobile: ['', Validators.required],
    homePhone: ['', Validators.required],
    livesAlone: false
    })
  }

  onSubmit(){
    console.log(this.patientInformationForm.value);
    this.patientInformationForm.reset();
  }

  // selectTitle(event):void{
  //   this.patientInformationForm.patchValue({
  //     title: event.target.value
  //   });
  // }
}
