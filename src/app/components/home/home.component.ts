import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestcountriesService } from '../../services/restcountries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries : any[] = []
  regions : string[] = []

  constructor( private http: HttpClient,
                private countriesServ: RestcountriesService) {

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
    console.log(search);


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

  }

  ngOnInit(): void {
  }

}
