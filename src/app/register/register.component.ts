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
    state : '',
    approval: '',
    description : '',
    paymentMode : '',
    date : '',
    course : {
     id : ''
    }
}

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

}
