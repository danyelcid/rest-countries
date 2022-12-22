import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestcountriesService } from '../../services/restcountries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {

  myCountry : any[] = []
  myBorders : any[] = []
  nativeName : any[] = []
  currencies: string[] = []
  langs: string[] = []
  isLoading: boolean = true

  constructor(  private route: ActivatedRoute,
                private countryService: RestcountriesService) {
    this.route.params.subscribe(params =>{
      this.getData(params['id'])
    })
  }

  getData( code: string){

      this.countryService.searchByCode(code)
        .subscribe( (data: any )=> {

          this.myCountry = data
          console.log(this.myCountry);
          const nativeNames = this.myCountry[0].name.nativeName
          const currency = this.myCountry[0].currencies
          const langs = this.myCountry[0].languages

          let keys = Object.keys(nativeNames);
          let k = keys[0];
          this.nativeName = nativeNames[k]

          let keys2 = Object.keys(currency);
          for(let i=0; i< keys2.length; i++){
            let k2 = keys2[i];
            this.currencies.push(currency[k2].name)
          }

          let keys3 = Object.keys(langs);
          for(let i=0; i< keys3.length; i++){
            let k2 = keys3[i];
            this.langs.push(langs[k2])
          }

          if (this.myCountry[0]['borders']) {

            let borders = this.myCountry[0]['borders'].join(',')

            this.countryService.searchByCode(borders)
                .subscribe( (borders: any) => {
                  this.myBorders = borders
                })
          }
          setTimeout(() => {
            this.isLoading = false
          }, 300);

        })
    }
  ngOnInit(): void {
  }

}
