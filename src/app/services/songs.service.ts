import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SongEntity } from '../entities/songs/song.interface';
import { environment } from '../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllSongs(): Observable<SongEntity[]> {
    return this.http.get<SongEntity[]>(this.apiUrl+`/songs`);
  }

  postSongs(rq: any): Observable<SongEntity[]> {
    return this.http.post<SongEntity[]>(this.apiUrl+`/songs`, rq);
  }

  updateSongs(rq: any): Observable<boolean> {
    return this.http.put<boolean>(this.apiUrl+`/songs`, rq);
  }
  
  deleteSongs(id: any): Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl+`/songs/${id}`);
  }
}
