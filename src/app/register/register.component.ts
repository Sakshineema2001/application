import { Component, OnInit } from '@angular/core';
import { EliteService } from '../elite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

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

constructor(private service:EliteService, private router: Router){

}
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

formSubmit(){
 this.service.addData(this.elite).subscribe((data) =>{

   this.goToEliteList();
 }, (error) =>{
   alert('failed');
 });
}

goToEliteList(){
  this.router.navigate(['/data-table']);
}


onChangeState(elite: any) {
   const id = elite.state.id;
   if (id) {
    this.service.getCities(id).subscribe((data :any)=> 
      this.city = data
    ); } 
   }

}
