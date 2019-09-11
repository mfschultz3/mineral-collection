import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Mineral {
	type: string;
  collected_in: string;
  weight_in_grams: number;
  id: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class MineralService {

  constructor(private http: HttpClient) { }

  numbersUrl = 'https://interview.api.numbersusa.com/rock_collection/';

  getMinerals() {
    return this.http.get(this.numbersUrl);
  }

  getMineral(mineral: Mineral) {
    return this.http.get(this.numbersUrl + mineral.id + '/');
  }

  addMineral(mineral: Mineral): Observable<Mineral> {
    const url = this.numbersUrl + mineral.id + '/';
    return this.http.post<Mineral>(url, mineral, httpOptions);
  }

  deleteMineral(mineral: Mineral) {
    const url = this.numbersUrl + mineral.id + '/';
    return this.http.delete(url);
  }

  editMineral(mineral: Mineral) {
    const url = this.numbersUrl + mineral.id + '/';
    return this.http.put(url, mineral, httpOptions);
  }

  resetCollection() {
    const url = this.numbersUrl + 'reset/';
    return this.http.post(url, null, httpOptions);
  }

 private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An Error occured: ', error.error.message);
    } else {
      console.error('Backend returned code ${error.status}, ' +
      'body was: ${error.error}');
    }
    return throwError('Something bad happened, try again later');

  }

}
