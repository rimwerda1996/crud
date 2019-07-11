import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UserListComponent } from '../../user-list/user-list.component';
import { ProjetListComponent } from '../../projet-list/projet-list.component';
import { ResourceListeComponent } from '../../resource-liste/resource-liste.component';

import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ModalComponent } from '../../modal/modal.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-list',     component: UserListComponent },
    { path: 'projet-list',     component: ProjetListComponent },
    { path: 'resource-list',     component: ResourceListeComponent },

    { path: 'modal',        component: ModalComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
