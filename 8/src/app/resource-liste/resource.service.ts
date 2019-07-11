import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ResourceService {

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
    return this.http.get('http://localhost:9099/resource/all');
  }
  getById(id: String):Observable<any>{
    return this.http.get('http://localhost:9099/resource/'+id);
  }
  deleteRes(id: string) {
    return this.http.delete('http://localhost:9099/resource/'+id)
  }
 

  getRes(page:number): Observable<any>{
    return this.http.get('http://localhost:9099/resource/page?page='+page);
  } 
 

  
}


