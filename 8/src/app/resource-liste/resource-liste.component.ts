import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resource.service';
import {Router} from '@angular/router';
import { FormGroup } from '@angular/forms';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { User } from './../components/User';


 declare interface TableData {
    headerRow: string[];
    dataRows: string[][]; }
@Component({
  selector: 'app-resource-liste',
  templateUrl: './resource-liste.component.html',
  styleUrls: ['./resource-liste.component.scss']
})
export class ResourceListeComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;
  public tabStag: Array <any>;
  public tabStag1:Array <any>; 
  public nom : String;
  public prenom: String;
  public cin : String;
  public email : String;
  public tel : String;
  public contractTypeValid = "False";
  private page:number = 0;
  private pages:Array<any>;
  private i:number;
  stagiaireForm : FormGroup;
  data : User;
 
  
  


constructor(private  resourceService: ResourceService,private router: Router,config: NgbModalConfig, private modalService: NgbModal ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  
}

ngOnInit() {
  
  this.getResourcePage(); 
} 
setPage(i,event:any){
this.i=i;
event.preventDefault();
this.page=i;
this.getResourcePage(); 
} 
  
open(content) {
  
    this.modalService.open(content,{ size: 'lg' },);
    
    
  }
    
affiche() {
  this.resourceService.getAll().subscribe(data => {
      this.tabStag = data;

});
}

getResourcePage(){
this.resourceService.getRes(this.page).subscribe(data =>{
  this.tabStag = data['content'];
  this.pages= new Array(data['totalPages']);
});
} 
ajouter(){
this.resourceService.changeClick("ajouter");
this.router.navigate(['/user']);

}
save(data): void{
    console.log(this.nom);
   
    const user= data.value;
   
    
        this.resourceService.addRes(user).subscribe(
      res=>{
        this.affiche();
      }
    );
    this.router.navigate(['/resource-list']);
  }
  



update(id){
this.resourceService.getById(id).subscribe( (data:Array<any>)  => {
  this.tabStag1 = data;
  this.resourceService.changeMessage(this.tabStag1);
  this.resourceService.changeClick("modifier");
  console.log(id);
  this.tabStag1['id']=id;
  
  
  this.router.navigate(['/resource-profile']);
  });
  
}

deleteRes(id){
this.resourceService.deleteRes(id).subscribe((response => {console.log(response); this.resourceService.getAll().subscribe(data=>{this.tabStag = data;})

}));
/*this.getSatgiairePage(); */


}


SearchByNom(){
if (this.nom != "") {
    this.tabStag = this.tabStag.filter(response => {return response.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
    });
  }

  else if (this.nom == "" ){ 
      this.ngOnInit();
  }


}

SearchByPrenom(){
if (this.prenom != "") {
    this.tabStag = this.tabStag.filter(response => {return response.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
    });

}
else if (this.prenom == "" ){
    this.ngOnInit();
}
}

SearchByEmail(){
if (this.email != "") {
    this.tabStag = this.tabStag.filter(response => {return response.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
    });

}
else if (this.email == "" ){
    this.ngOnInit();
}
}
SearchByTel(){
if (this.tel != "") {
    this.tabStag = this.tabStag.filter(response => {return response.tel.toLocaleLowerCase().match(this.tel.toLocaleLowerCase());
    });

}
else if (this.tel == "" ){
    this.ngOnInit();
}
}

}


