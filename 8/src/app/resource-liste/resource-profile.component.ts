import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router';
import { ResourceService } from './resource.service';
import { User } from './../components/User';
@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.scss']
})
export class ResourceProfileComponent implements OnInit {
  public tabStag: Array <any>;
  stagiaireForm : FormGroup;
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
 
  constructor(private  stagiaireService: ResourceService,private router: Router) { }

  ngOnInit() {
    this.stagiaireService.currentMessage.subscribe(message => this.tabStag2 = message);
    this.stagiaireService.bool.subscribe(message => this.click = message)  
    if(this.click=="modifier"){
    this.email = this.tabStag2['email'];
   
    this.nom = this.tabStag2['nom'];
    this.prenom = this.tabStag2['prenom'];
    this.i=(this.tabStag2["id"]);
    
    }else{
      this.email = null;
     
      this.nom = null;
      this.prenom = null;
     
    }

  
  }
  affiche() {
    this.stagiaireService.getAll().subscribe(data => {
        this.tabStag = data;

}
)
}
  saveStagiaire(data): void {
    const user= data.value;
   
        this.stagiaireService.updateRes(this.i,user).subscribe(
      res=>{
        this.affiche();
      }
    );
    this.router.navigate(['/resource-list']);

    }
  }


