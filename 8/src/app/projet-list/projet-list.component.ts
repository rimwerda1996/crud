import { Component, OnInit } from '@angular/core';
import { ProjetService } from './projet.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { format } from 'url';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { User } from './../components/User';
 declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit {
 
  



  public tableData1: TableData;
  public tableData2: TableData;
  public tabStag: Array <any>;
  public tabStag1: Array <any>;
  public nom : String;

  public dated : Date;
  public datef :Date ;
  public submited :Boolean;

  private page:number = 0;
  private pages:Array<any>;
  private i:number;
  private form:FormGroup;
 
  
  
  data : User;
  


constructor(private fb: FormBuilder,private  projetService: ProjetService,private router: Router,config: NgbModalConfig, private modalService: NgbModal ) { 
  config.backdrop = 'static';
  config.keyboard = false;

  this.form = new FormGroup({
    nom: new FormControl('', Validators.required),
    type_projet: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
    date_debut: new FormControl('', Validators.required),
    date_fin: new FormControl('', Validators.required),
   
  
});

}

ngOnInit() {
  
  this.getProjetPage(); 
  
}
formSubmit(){
  if(this.form.valid){
    console.log("yes")
    this.save(this.form);
  }
}

setPage(i,event:any){
this.i=i;
event.preventDefault();
this.page=i;
this.getProjetPage(); 
} 
open(content) {
  
  this.modalService.open(content,{ size: 'lg' },);
  
  
}
 

get name (){
  return this.form.get('nom')
}
get budget(){
  return this.form.get('budget')
}
get type_projet(){
  return this.form.get('type_projet')
}
get date_debut(){
  return this.form.get('date_debut')
}
get date_fin(){
  return this.form.get('date_fin')
}



affiche() {
  this.projetService.getAll().subscribe(data => {
      this.tabStag = data;

});
}

getProjetPage(){
this.projetService.getProj(this.page).subscribe(data =>{
  this.tabStag = data['content'];
  this.pages= new Array(data['totalPages']);
});
} 

ajouter(){
this.projetService.changeClick("ajouter");
this.router.navigate(['/user']);

}


save(data): void{
 
  const user= data.value;
 console.log(user);
  
      this.projetService.addProj(user).subscribe(
    res=>{
      this.affiche();
    }
  );
  this.router.navigate(['/projet-list']);
}



update(id){
this.projetService.getById(id).subscribe( (data:Array<any>)  => {
  this.tabStag1 = data;
  this.projetService.changeMessage(this.tabStag1);
  this.projetService.changeClick("modifier");

  this.tabStag1['id']=id;
  console.log(this.tabStag1);
  
  this.router.navigate(['/projet-profile']);
  });
  
}

deleteProj(id){
this.projetService.deleteProj(id).subscribe((response => {console.log(response); this.projetService.getAll().subscribe(data=>{this.tabStag = data;})

}));
/*this.getSatgiairePage(); */


}




}
