import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club, League } from './app-data';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getLeages(): Observable<League[]> {
    return this.http.get<League[]>('api/leagues');
  }

  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>('api/leagues/1')
      .pipe(
        map((item: any) => item.seasons[0].clubs),
        tap(clubs => console.log(clubs))
      );
  }
}
