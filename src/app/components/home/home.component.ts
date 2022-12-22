import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestcountriesService } from '../../services/restcountries.service';
import { Router } from "@angular/router";
import { error } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries : any[] = []
  regions : string[] = []
  hasError: boolean
  isLoading: boolean

  constructor(  private http: HttpClient,
                private countriesServ: RestcountriesService,
                private router: Router) {
      this.isLoading = true            
      this.countriesServ.getCountries()
          .subscribe( (data:any) => {
            this.countries = data
            this.countries.forEach( country => {
              if (!this.regions.includes(country.region)){
                this.regions.push(country.region)
              }
            })
            this.isLoading = false
          })

  }

  filter ( search: string) {

    if ( search !== ""){
      this.isLoading = true
      this.countriesServ.searchByName( search )
      .subscribe( (data:any) => {
        this.countries = data
        this.hasError = false
        this.isLoading = false
      }, (error) =>{
        if (error['status'] == '404') {
          this.hasError = true
          this.countries = []
          this.isLoading = false
        }
        
      })

    } else {
      this.countriesServ.getCountries()
      .subscribe( (data:any) => {
        this.countries = data
        this.hasError = false
        this.isLoading = false
      })
    }
    
    const dropdown = document.querySelector('#dropdown')

    dropdown.classList.remove('active')
  }

  filterRegion( region: string){
      this.isLoading = true
    if ( region !== ""){
      this.countriesServ.searchByRegion( region )
      .subscribe( (data:any) => {
        this.countries = data
        this.hasError = false
        this.isLoading = false
      })

    } else {
      this.countriesServ.getCountries()
      .subscribe( (data:any) => {
        this.countries = data
        this.hasError = false
        this.isLoading = false
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
