import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

   getAllCountries(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl+`/countries`);
    }
}
