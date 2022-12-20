import { Routes } from "@angular/router";
import { CountryComponent } from "./components/country/country.component";
import { HomeComponent } from "./components/home/home.component";


export const ROUTES : Routes = [
    {path: "home", component: HomeComponent },
    {path: "country/:id", component: CountryComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
]
