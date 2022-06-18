import { Song } from './../models/song';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  urlImage: string = 'http://api.skilldistillery.com:8080/poke/data/poke';
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

  create(song: Song) {
    return this.http.post<Song>(this.url, song).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error creating song');
      })
    );
  }

  destroy(id: number) {
    return this.http.delete<Song>(this.url + "/delete/" + id).pipe (
      catchError((err: any) => {
        console.log(err);
        return throwError("error deleting song");
      })
    );
  }
  update(song: Song) {
    return this.http.put<Song>(this.url + "/"+ song.id, song).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError("error updating song");
      })
    );
  }

}
