import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Elite } from 'src/Elite';
import { Observable } from 'rxjs';
import { FamilyInfo } from './familyInfo';

@Injectable({
  providedIn: 'root'
})
export class EliteService {

  public baseurl = "http://localhost:8080/elite";
  constructor(private http:HttpClient) { }

  public addData(elite:any){
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

  getAllState(){
    return this.http.get(`${this.baseurl}/state`)
  }

  getCities(id: number) {
    return this.http.get(`${this.baseurl}/cities/${id}`)
  }

  public postData(elite:any){
    return this.http.post(`${this.baseurl}/create`,elite)
  }

  public createFamilyInfo(familyInfo: FamilyInfo[]): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/family-info`, familyInfo);
  }
}
