import { Routes } from "@angular/router";
import { CountryComponent } from "./components/country/country.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";


export const ROUTES : Routes = [
    {path: "home", component: HomeComponent },
    {path: "search", component: SearchComponent },
    {path: "country", component: CountryComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
]