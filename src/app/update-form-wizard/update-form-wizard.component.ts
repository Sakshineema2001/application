import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { EliteService } from '../elite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-form-wizard',
  templateUrl: './update-form-wizard.component.html',
  styleUrls: ['./update-form-wizard.component.css']
})
export class UpdateFormWizardComponent {
  currentStepIndex: number = 0;

  id !: any;
  public elite: any = {
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
  

  constructor( private _formBuilder: FormBuilder, private service: EliteService,private router :Router,private route : ActivatedRoute) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getEliteById(this.id).subscribe(data => {
      console.log(data)
      this.elite = data;
    }, error => console.log(error));
    
    this.service.getCourses().subscribe((data:any) =>{
      this.courses = data;
      console.log(this.courses)
  },(error) => {
    alert('something went wrong')
  })
  this.service.getAllState().subscribe((data:any) =>{
   this.state = data;
   this.onChangeState(this.elite)
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
      this.service.updateElite(this.id, this.elite).subscribe((data) =>{
        this.goToEliteList();
      }, (error) =>{
        alert('failed');
      });
     }

     goToEliteList(){
      this.router.navigate(['/data-table']);
    }
}
