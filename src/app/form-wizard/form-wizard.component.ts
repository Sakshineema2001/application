import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EliteService } from '../elite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.css']
})
export class FormWizardComponent {

  formWizard !:  FormGroup;
   
  public elite = {
    name : '',
    contactNo : '',
    approval: '',
    description : '',
    paymentMode : '',
    date : '',
    state : {
      id: ''
    },
    city : {
      id: ''
    },
    course : {
     id : ''
    },
    bankDetails : {
      id : '',
      accountNo : '',
      owner : '',
      ifsc  : ''
    }
}

public city = [
  {
    id : '',
    city : ''
  }
]


 public state = [
  {
    id : '',
    state : ''
  }
]

public courses = [
 {
     id : '',
     courseName : ''
 }
] 

public bankDetails = [
  {
    id : '',
    accountNo : '',
    owner : '',
    ifsc  : ''
  }
]


constructor( @Inject(FormBuilder) _formBuilder: FormBuilder) {
  this.formWizard = _formBuilder.group({
    firstFormGroup: _formBuilder.group({
          name: ['', Validators.required],
          contactNo: ['', Validators.required],
          course: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          approval: ['', Validators.required],
          description: ['', Validators.required],
          paymentMode: ['', Validators.required],
          date: ['', Validators.required],

      }),
      secondFormGroup: _formBuilder.group({
          accountNo: ['', Validators.required],
          owner: ['', Validators.required],
          ifsc: ['', Validators.required],
      }),
      thirdFormGroup: _formBuilder.group({
        //preview of all this
        name: ['', Validators.required],
          contactNo: ['', Validators.required],
          course: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          approval: ['', Validators.required],
          description: ['', Validators.required],
          paymentMode: ['', Validators.required],
          date: ['', Validators.required],
          accountNo: ['', Validators.required],
          owner: ['', Validators.required],
          ifsc: ['', Validators.required],
    })
  });
}

}
