import { SongsService } from './../../services/songs.service';
import { Song } from './../../models/song';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songList: Song[] = [];

  constructor(
    private SongsServ: SongsService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.SongsServ.index().subscribe({
      next: (artist) => {
        this.songList = artist;
      },
      error: (boom) => {
        console.error('error loading list');
        console.error(boom);
      }
    })
  }

}
