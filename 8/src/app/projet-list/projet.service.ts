import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
 import { User } from 'app/components/user';

@Injectable()
export class ProjetService {

  user : User[];
  private data = new BehaviorSubject(this.user);
  currentMessage = this.data.asObservable();
  private click = new BehaviorSubject('add');
  bool = this.click.asObservable();


  constructor(private http: HttpClient) {
  }

  changeMessage(data: User[]) {
    this.data.next(data)
  }

  changeClick(b: string) {
    this.click.next(b)
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:9099/projet/all');
  }
  getById(id: String):Observable<any>{
    return this.http.get('http://localhost:9099/projet/'+id);
  }
  deleteProj(id: string) {
    return this.http.delete('http://localhost:9099/projet/'+id)
  }
 
  addProj(stagiaire: User): Observable<any> {
    return this.http.post('http://localhost:9099/projet/',stagiaire);
  }
  updateProj(id : string ,stagiaire: User ){
    return this.http.put('http://localhost:9099/projet/'+id,stagiaire);}
  getProj(page:number): Observable<any>{
    return this.http.get('http://localhost:9099/projet/page?page='+page);
  } 
 

  
}


