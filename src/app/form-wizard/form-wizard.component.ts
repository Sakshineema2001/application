import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EliteService } from '../elite.service';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.css']
})
export class FormWizardComponent implements OnInit{

  currentStepIndex: number = 0;

  public elite = {
    name : '',
    contactNo : '',
    approval: '',
    description : '',
    paymentMode : '',
    date : '',
    state : {
      id: '',
      state : ''
    },
    city : {
      id: '',
      city:''
    },
    course : {
     id : '',
     courseName :'',
    },
    bankDetails :{
      id :'',
      accountNo :'',
      owner :'',
      ifsc :''
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
    id :'',
    accountNo :'',
    owner :'',
    ifsc :''
  }
]

@ViewChild('stepper') stepper !: MatStepper;
@ViewChild('firstForm', { static: false }) firstForm!: NgForm;
@ViewChild('secondForm', { static: false }) secondForm!: NgForm;
  

  constructor( private _formBuilder: FormBuilder, private service: EliteService,private router :Router) {}


  ngOnInit(): void {
    this.service.getCourses().subscribe((data:any) =>{
      this.courses = data;
      console.log(this.courses)
  },(error) => {
    alert('something went wrong')
  })
  this.service.getAllState().subscribe((data:any) =>{
   this.state = data;
  })

  }

  onChangeState(elite: any) {
    const id = elite.state.id;
    if (id) {
     this.service.getCities(id).subscribe((data :any)=> 
       this.city = data
     ); } 
    }

    onNext() {
     if (this.firstForm.valid) {
       this.currentStepIndex++;
       this.stepper.selectedIndex = this.currentStepIndex - 1;
       this.stepper.next();
      this.secondForm.resetForm();
     } else {
         alert('Please fill in all the required fields.');
         this.stepper.selectedIndex = this.currentStepIndex;
     }
    }

    formSubmit(){
      this.service.postData(this.elite).subscribe((data) =>{
        this.goToEliteList();
      }, (error) =>{
        alert('failed');
      });
     }

     goToEliteList(){
      this.router.navigate(['/data-table']);
    }
}
