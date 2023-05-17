import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EliteService } from '../elite.service';
import { Course, Elite } from 'src/Elite';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit,AfterViewInit{
  
courses !: Course[];
displayedColumns: string[] = ['id', 'name', 'date', 'contactNo','city','state','course','actions'];
dataSource: MatTableDataSource<Elite> = new MatTableDataSource<Elite>();
searchValue: string = '';

@ViewChild(MatPaginator) paginator !: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

 constructor(private service:EliteService, private roter:Router){
    
 }
  ngOnInit(): void {
    
    this.service.getEliteData().subscribe((data:any) => {
      this.dataSource.data = data;
    });

    this.service.getCourses().subscribe((data) =>{
      this.courses = data as Course[];
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.dataSource.filter = this.searchValue.trim().toLowerCase();
  }

  clearFilter() {
    this.searchValue = '';
    this.applyFilter();
  }

  getCourseName(id: number): string {
    const course = this.courses.find(c => c.id === id);
    return course ? course.courseName : '';
  }

  updateFamilyInfo(id: number){
    this.roter.navigate(['reactive-update', id]);
  }

  updateElite(id: number){
    this.roter.navigate(['update', id]);
  }

  updateFormWizard(id: number){
    this.roter.navigate(['form-wizard-update', id]);
  }

  delete(id :number){
    this.service.deleteElite(id).subscribe((data) =>{
      location.reload();
      this.roter.navigate(['/data-table'])
    })
  }

  openFamilyInfoForm(eliteId : number){
     this.roter.navigate(['reactive-form-group',eliteId]);
  }

}
