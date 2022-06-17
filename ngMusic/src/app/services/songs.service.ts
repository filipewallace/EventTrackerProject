import { Song } from './../models/song';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private url = environment.baseUrl + 'api/music';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Song[]>  {
    return this.http.get<Song[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('erros getting songs');
      })
    );
  }
}
