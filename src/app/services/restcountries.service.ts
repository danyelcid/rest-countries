import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {

  constructor(private http: HttpClient) {

    console.log('service runnig');

  }

  getCountries () {

    return this.http.get('https://restcountries.com/v3.1/all');

  }

  searchByName ( name: string ) {

    return this.http.get('https://restcountries.com/v3.1/name/'+name);

  }

  searchByRegion ( region: string ) {

    return this.http.get('https://restcountries.com/v3.1/region/siip'+region);

  }

  searchByCode ( code: string ) {

    return this.http.get('https://restcountries.com/v3.1/alpha?codes='+ code);

  }
}
