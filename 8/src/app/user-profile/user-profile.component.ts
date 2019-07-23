import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router';
import { UserService } from '../user-list/user.service';
import { User } from './../components/User';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',

})
export class UserProfileComponent implements OnInit {
  public tabStag: Array <any>;

  click: string;
  email : String;
  password : String;
  nom: String;
  prenom : String;
  cin : String;
  tel : String;
  data : User;
  i : string;
  public tabStag2: User[];
 
  constructor(private  userService: UserService,private router: Router) { }

  ngOnInit() {
    this.userService.currentMessage.subscribe(message => this.tabStag2 = message);
    this.userService.bool.subscribe(message => this.click = message)  
    if(this.click=="modifier"){
    this.email = this.tabStag2['email'];
    this.cin = this.tabStag2['cin'];
    this.nom = this.tabStag2['nom'];
    this.prenom = this.tabStag2['prenom'];
    this.i=(this.tabStag2["id"]);
    
    }else{
      this.email = null;
     
      this.nom = null;
      this.prenom = null;
     
    }

  
  }
 
  save(data): void {
    const user= data.value;
   
        this.userService.updateUser(this.i,user).subscribe(
      res=>{
        this.router.navigate(['/user-list']);
      }
    );
   
    }
  }


