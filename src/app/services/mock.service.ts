import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SongEntity } from '../entities/songs/song.interface';
import { ArtistEntity } from '../entities/artists/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSongs(): Observable<SongEntity[]> {
    return this.http.get<SongEntity[]>(this.apiUrl+`/songs`);
  }

  getArtists(): Observable<ArtistEntity[]> {
    return this.http.get<ArtistEntity[]>(this.apiUrl+`/artists`);
  }
}
