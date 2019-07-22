import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './../components/User';
import {Router} from '@angular/router';
import { FormGroup } from '@angular/forms';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {

 

    public user : User;
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
    


  constructor(private  userService: UserService,private router: Router,config: NgbModalConfig, private modalService: NgbModal ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    
    this.getUserPage();
} 
setPage(i,event:any){
  this.i=i;
  event.preventDefault();
  this.page=i;
  this.getUserPage();
} 
    
open(content) {
  
  this.modalService.open(content,{ size: 'lg' },);
  
  
}  
affiche() {
    this.userService.getAll().subscribe(data => {
        this.tabStag = data;

});
}

getUserPage(){
  this.userService.getUser(this.page).subscribe(data =>{
    this.tabStag = data['content'];
    this.pages= new Array(data['totalPages']);
  });
}
ajouter(){
  this.userService.changeClick("ajouter");
  this.router.navigate(['/user']);

}

save(data): void{
  console.log(this.nom);
 
  const user= data.value;
 
  
      this.userService.addUser(user).subscribe(
    res=>{
      this.affiche();
    }
  );
  this.router.navigate(['/user-list']);
}




update(id){
  this.userService.getById(id).subscribe( (data:Array<any>)  => {
    this.tabStag1 = data;
    this.userService.changeMessage(this.tabStag1);
    this.userService.changeClick("modifier");
    console.log(id);
    this.tabStag1['id']=id;
    console.log(this.tabStag1);
    
    this.router.navigate(['/user-profile']);
    });
    
}

deleteStag(id){
  this.userService.deleteUser(id).subscribe((response => {console.log(response); this.userService.getAll().subscribe(data=>{this.tabStag = data;})

  }));
  this.getUserPage();
  
  
}

SearchByCin(){
  if (this.cin != "") {
      this.tabStag = this.tabStag.filter(response => {return response.cin.toLocaleLowerCase().match(this.cin.toLocaleLowerCase());
      });
    
  }
 
      else if (this.cin == ""  ){
        this.ngOnInit();
  }

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

