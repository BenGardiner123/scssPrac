import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  staffInformationForm: FormGroup;
  success:boolean = false;
  fail:boolean = false;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void{
    this.initializeForm();
  }

  initializeForm(): void{
    this.staffInformationForm = this.fb.group({
    staffId: ['', Validators.required],
    givenName: ['', Validators.required],
    familyName: ['', Validators.required],
    password: ['', Validators.required],
    roleId: ['', Validators.required],
    })
  }

  onSubmit(){
    console.log(this.staffInformationForm.value);
    this.staffInformationForm.reset();
  }

  // selectTitle(event):void{
  //   this.patientInformationForm.patchValue({
  //     title: event.target.value
  //   });
  // }

}
