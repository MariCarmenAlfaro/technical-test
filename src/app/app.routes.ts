import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongsComponent } from './components/songs/songs.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { CompaniesComponent } from './components/companies/companies.component';

export const routes: Routes = [
    {path : "home", component: HomeComponent},
    {path : "songs", component: SongsComponent},
    {path : "artists", component: ArtistsComponent},
    {path : "companies", component: CompaniesComponent}
];
