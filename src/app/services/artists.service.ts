import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { ArtistEntity } from '../entities/artists/artist.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllArtists(): Observable<ArtistEntity[]> {
    return this.http.get<ArtistEntity[]>(this.apiUrl+`/artists`);
  }

}
