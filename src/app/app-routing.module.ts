import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProfilComponent }  from './profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: '/profil', pathMatch: 'full' },
  { path: 'profil',     component: ProfilComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
