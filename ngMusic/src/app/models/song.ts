export class Song {
id: number | null;
artist: string | null;
album: string | null;
songTitle: string | null;
appleMusicLink: string | null;
date: string | null;
description: string | null;
albumURL: string | null;

constructor(
id: number | null = 0,
artist: string | null = '',
album: string | null = '',
songTitle: string | null = '',
appleMusicLink: string | null = '',
date: string | null = '',
description: string | null = '',
albumURL: string | null = ''
) {
  this.id = id;
  this.artist = artist;
  this.album = album;
  this.songTitle = songTitle;
  this.appleMusicLink = appleMusicLink ;
  this.date = date;
  this.description = description;
  this.albumURL = albumURL;

}

}
