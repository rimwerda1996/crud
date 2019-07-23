import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router';
import { ProjetService } from '../projet-list/projet.service';
import { User } from './../components/User';

@Component({
  selector: 'app-projet-profile',
  templateUrl: './projet-profile.component.html',
  styleUrls: ['./projet-profile.component.scss']
})
export class ProjetProfileComponent implements OnInit {
  public tabStag: Array <any>;
 

  data : User;
  i : string;
  click: string;
  nom : String;
  type_projet: String;
  date_debut: Date;
  date_fin : Date;
  budget : DoubleRange;

 
  public tabStag2: User[];
 
  constructor(private  projetService: ProjetService,private router: Router) { }

  ngOnInit() {
    this.projetService.currentMessage.subscribe(message => this.tabStag2 = message);
    this.projetService.bool.subscribe(message => this.click = message)  
    if(this.click=="modifier"){
   
   
    this.nom = this.tabStag2['nom'];
    this.type_projet = this.tabStag2['type_projet'];
    this.budget = this.tabStag2['budget'];
    this.date_debut = this.tabStag2['date_debut'];
    this.date_fin = this.tabStag2['date_fin'];

    this.i=(this.tabStag2["id"]);
    
    }else{
      this.nom = null;
      this.type_projet =null;
      this.budget = null;
      this.date_debut = null;
      this.date_fin = null;
    }

  
  }
 
  updat(data): void {
    const projet= data.value;
    console.log(projet)
   
        this.projetService.updateProj(this.i,projet).subscribe(
      res=>{
      
        this.router.navigate(['/projet-list']);
      }
    );
    

    }




  }


