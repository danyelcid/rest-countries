import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestcountriesService } from '../../services/restcountries.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries : any[] = []
  regions : string[] = []

  constructor(  private http: HttpClient,
                private countriesServ: RestcountriesService,
                private router: Router) {

      this.countriesServ.getCountries()
          .subscribe( (data:any) => {
            this.countries = data
            this.countries.forEach( country => {
              if (!this.regions.includes(country.region)){
                this.regions.push(country.region)
              }
            })
          })

  }

  filter ( search: string) {

    if ( search !== ""){
      this.countriesServ.searchByName( search )
      .subscribe( (data:any) => {
        this.countries = data
      })

    } else {
      this.countriesServ.getCountries()
      .subscribe( (data:any) => {
        this.countries = data
      })
    }
    
    const dropdown = document.querySelector('#dropdown')

    dropdown.classList.remove('active')
  }

  filterRegion( region: string){

    if ( region !== ""){
      this.countriesServ.searchByRegion( region )
      .subscribe( (data:any) => {
        this.countries = data
      })

    } else {
      this.countriesServ.getCountries()
      .subscribe( (data:any) => {
        this.countries = data
      })
    }

    const dropdown = document.querySelector('#dropdown')

    dropdown.classList.remove('active')


  }
   countryDetails( name: string ) {

    this.router.navigate(['/country', name])

   }

   showOptions( ){

    const dropdown = document.querySelector('#dropdown')

    if (!dropdown.classList.contains('active')){
      dropdown.classList.add('active')
    } else {
      dropdown.classList.remove('active')
    }

   }

  ngOnInit(): void {
  }

}
