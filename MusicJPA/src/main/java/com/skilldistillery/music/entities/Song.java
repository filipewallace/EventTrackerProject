package com.skilldistillery.music.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "music")
@Entity
public class Song {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String artist;

	private String album;

	@Column(name = "song_title")
	private String songTitle;

	@Column(name = "apple_music_link")
	private String appleMusicLink;

	private LocalDate date;

	private String description;

	@Column(name = "album_pic")
	private String albumURL; 

	// -----------------------------------------------------------------------------------//
	public Song() {
		super();
	}

	// -----------------------------------------------------------------------------------//

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}

	public String getSongTitle() {
		return songTitle;
	}

	public void setSongTitle(String songTitle) {
		this.songTitle = songTitle;
	}

	public String getAppleMusicLink() {
		return appleMusicLink;
	}

	public void setAppleMusicLink(String appleMusicLink) {
		this.appleMusicLink = appleMusicLink;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalDate getDate() {
		return date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAlbumURL() {
		return albumURL;
	}

	public void setAlbumURL(String albumURL) {
		this.albumURL = albumURL;
	}

	//-----------------------------------------------------------------------------------//

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Song other = (Song) obj;
		if (id != other.id)
			return false;
		return true;
	}

	//-----------------------------------------------------------------------------------//
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Song [id=");
		builder.append(id);
		builder.append(", artist=");
		builder.append(artist);
		builder.append(", album=");
		builder.append(album);
		builder.append(", songTitle=");
		builder.append(songTitle);
		builder.append(", appleMusicLink=");
		builder.append(appleMusicLink);
		builder.append(", date=");
		builder.append(date);
		builder.append(", description=");
		builder.append(description);
		builder.append(", albumURL=");
		builder.append(albumURL);
		builder.append("]");
		return builder.toString();
	}

}