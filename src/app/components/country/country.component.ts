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

  constructor(  private route: ActivatedRoute,
                private countryService: RestcountriesService) {

    this.route.params.subscribe(params =>{
      this.countryService.searchByCode(params['id'])
          .subscribe( data => {

            this.myCountry = data[0]
            console.log(this.myCountry);

            if (this.myCountry['borders']) {

              let borders = this.myCountry['borders'].join(',')

              this.countryService.searchByCode(borders)
                  .subscribe( (borders: any) => {

                    this.myBorders = borders
                    
                  })
            }

          })
    })
  }

  ngOnInit(): void {
  }

}
