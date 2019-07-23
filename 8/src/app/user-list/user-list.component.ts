import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './../components/User';
import {Router} from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
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
   
    public tel : String;
    public contractTypeValid = "False";
    private page:number = 0;
    private pages:Array<any>;
    private i:number;
    form : FormGroup;
    data : User;
    


  constructor(private  userService: UserService,private router: Router,config: NgbModalConfig, private modalService: NgbModal ) { 
    config.backdrop = 'static';
    config.keyboard = false;
    this.form = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
    cin: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      
     
    
  });
  }

  ngOnInit() {
    
    this.getUserPage();

} 
formSubmit(){
  if(this.form.valid){
    console.log("yes")
    this.save(this.form);
  }
}
get nom (){
  return this.form.get('nom')
}
get cin (){
  return this.form.get('cin')
}
get email(){
  return this.form.get('email')
}
get prenom(){
  return this.form.get('prenom')
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

