import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Elite } from 'src/Elite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EliteService {

  public baseurl = "http://localhost:8080/elite";
  constructor(private http:HttpClient) { }

  public addData(elite:any){
    console.log("i am here..............")
    return this.http.post(`${this.baseurl}/post`,elite)
  }

  public getCourses(){
    return this.http.get(`${this.baseurl}/get-all-course`)
  }

  public getEliteData(){
    return this.http.get(`${this.baseurl}/get`)
  }

  public updateElite(id: number, elite: Elite): Observable<Object>{
    return this.http.put(`${this.baseurl}/update/${id}`, elite);
  }

  getEliteById(id: number) {
    return this.http.get(`${this.baseurl}/get/${id}`)
  }

  deleteElite(id: number){
    return this.http.delete(`${this.baseurl}/delete/${id}`)
  }
}
