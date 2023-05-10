import { Component, OnInit } from '@angular/core';
import { EliteService } from '../elite.service';
import { Course, Elite } from 'src/Elite';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{
  
elite !: Elite[];
courses !: Course[];

 constructor(private service:EliteService, private roter:Router){

 }
  ngOnInit(): void {
   this.getEliteDatas();
   this.getCourseData();
  }

  private getEliteDatas(){
    this.service.getEliteData().subscribe((data) =>{
      this.elite = data as Elite[];
    });
  }

  private getCourseData() : void{
    this.service.getCourses().subscribe((data) =>{
      this.courses = data as Course[];
      
    })
  }

  getCourseName(id: number): string {
    const course = this.courses.find(c => c.id === id);
    return course ? course.courseName : '';
  }

  updateElite(id: number){
    this.roter.navigate(['update', id]);
  }

  delete(id :number){
    this.service.deleteElite(id).subscribe((data) =>{
      location.reload();
      this.roter.navigate(['/data-table'])
    })
  }

}
