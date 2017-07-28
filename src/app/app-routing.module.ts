import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CooptationComponent }  from './cooptation/cooptation.component';

const routes: Routes = [
  { path: '', redirectTo: '/cooptation', pathMatch: 'full' },
  { path: 'cooptation',     component: CooptationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
