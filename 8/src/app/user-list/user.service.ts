import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/components/user';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UserService {

  user : FormGroup;
  private data = new BehaviorSubject(this.user);
  currentMessage = this.data.asObservable();
  private click = new BehaviorSubject('add');
  bool = this.click.asObservable();


  constructor(private http: HttpClient) {
  }

  changeMessage(data: FormGroup) {
    this.data.next(data)
  }

  changeClick(b: string) {
    this.click.next(b)
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:9099/user/all');
  }
  getById(id: String):Observable<any>{
    return this.http.get('http://localhost:9099/user/'+id);
  }
  deleteUser(id: string) {
    return this.http.delete('http://localhost:9099/user/'+id)
  }
  add(stagiaire: User): Observable<any> {
    return this.http.put('http://localhost:9099/user/',stagiaire);
  }

  getUser(page:number): Observable<any>{
    return this.http.get('http://localhost:9099/user/page?page='+page);
  }
  updateUser(id : string ,stagiaire: User ){
    return this.http.put('http://localhost:9099/user/'+id,stagiaire);
  }
}


