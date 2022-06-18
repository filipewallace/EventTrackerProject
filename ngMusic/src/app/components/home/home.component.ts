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
  selected: any = null;
  createSong: any = null;
  newSong: any = new Song();
  editSong:any = null;

  constructor(
    private SongsServ: SongsService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  // reload() {
  //   this.SongsServ.index().subscribe({
  //     success => {
  //       // this.songList = artist;
  //       this.songList = success;
  //       this.selected = null;
  //       this.createSong = null;
  //       console.log("WE DID IT!");
  //     },
  //     error: (boom) => {
  //       console.error('error loading list');
  //       console.error(boom);
  //     }
  //   })
  // }

  reload() {
    return this.SongsServ.index().subscribe(
      success => {
        this.songList = success;
        this.selected = null;
        this.createSong = null;
        console.log("WE DID IT!");
      },
      fail => {
        console.log("error")
      }
    );
  }

  displaySong(song: Song): void{
    this.selected = song;
  }
  getSongCount() {
    return this.songList.length;
  }
  showSongForm() {
    this.createSong = true;
  }
  addSong() {
    this.SongsServ.create(this.newSong).subscribe(
      success => {
        alert(`newSong.songTitle` + 'created successfully');
        this.reload();
      },
      fail => {
        alert('Error creating new song')
      }
    );
  }

  deleteSong(id: number) {
    this.SongsServ.destroy(id).subscribe(
      success => {
        alert('Delete Successful');
        this.reload();
      },
      fail => {
        alert('Error deleting song');
      }
    )
  }
  updateSong(song: Song) {
    this.SongsServ.update(song).subscribe(
      success => {
        alert('Update Successful!');
        this.reload();
      },
      fail => {
        alert('Error updating song!');
      }
    )
  }

  displaySongList() {
    this.selected = null;
  }

  setEditSong() {
    this.editSong = Object.assign({}, this.selected);
  }

}
