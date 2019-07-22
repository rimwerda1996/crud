import { Component, OnInit } from '@angular/core';
import { ProjetService } from './projet.service';
import {Router} from '@angular/router';
import { FormGroup } from '@angular/forms';
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
  

  private page:number = 0;
  private pages:Array<any>;
  private i:number;
  stagiaireForm : FormGroup;
  data : User;
 
  


constructor(private  projetService: ProjetService,private router: Router,config: NgbModalConfig, private modalService: NgbModal ) { 
  config.backdrop = 'static';
  config.keyboard = false;

}

ngOnInit() {
  
  this.getProjetPage(); 
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
  console.log(this.nom);
 
  const user= data.value;
 
  
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
  console.log(id);
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
