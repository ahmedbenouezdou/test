import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './memoryData/in-memory-data.service';

import { AppComponent }         from './app.component';
import { ProfilComponent }  from './profil/profil.component';
import { AccountComponent }  from './account/account.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProfilComponent,
    AccountComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
