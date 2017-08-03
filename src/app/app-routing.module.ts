import { NgModule }             from '@angular/core';
import { RouterModule, Routes,RouterLinkActive } from '@angular/router';


import { ProfilComponent }  from './profil/profil.component';
import { AccountComponent }  from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: '/profil', pathMatch: 'full' },
  { path: 'profil',     component: ProfilComponent },
  { path: 'account',     component: AccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule,RouterLinkActive ]
})
export class AppRoutingModule {}
