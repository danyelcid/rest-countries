import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { HttpClientModule } from "@angular/common/http";

//Routs to use
import { ROUTES } from './app.routs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
