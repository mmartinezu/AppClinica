import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemberModel } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class CrudMemberService {

  constructor(private http:HttpClient) { }

  getMembers():Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/members`)
  }

  deleteMember(id:string):Observable<any> {
    return this.http.delete(`${environment.API_URL}/members/${id}`)
  }

  addMember(member:Partial<MemberModel>):Observable<any> {
    return this.http.post(`${environment.API_URL}/members`,member)
  }

  getMember(id:string):Observable<any> {
    return this.http.get(`${environment.API_URL}/members/${id}`)
  }

  updateMember(id:string, member:Partial<MemberModel>):Observable<any> {
    return this.http.put(`${environment.API_URL}/members/${id}`,member)
  }
}
