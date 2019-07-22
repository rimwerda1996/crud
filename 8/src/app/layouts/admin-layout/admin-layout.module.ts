import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UserListComponent } from '../../user-list/user-list.component';
import { ModalComponent } from '../../modal/modal.component';
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import { ProjetProfileComponent } from '../../projet-profile/projet-profile.component';
import { ResourceProfileComponent } from '../../resource-liste/resource-profile.component';


import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { ProjetListComponent } from '../../projet-list/projet-list.component';
import { ResourceListeComponent } from '../../resource-liste/resource-liste.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgbModalModule,
  ],
  declarations: [
   
    UserProfileComponent,
    UserListComponent,
    ModalComponent,
    ProjetListComponent,
    ResourceListeComponent,
    ProjetProfileComponent,
    ResourceProfileComponent,
   

   
   
    UpgradeComponent,
  ],

  entryComponents: [ProjetListComponent, ResourceListeComponent,UserListComponent],
 
})

export class AdminLayoutModule {}
