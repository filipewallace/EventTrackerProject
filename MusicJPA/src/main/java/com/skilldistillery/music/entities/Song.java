package com.skilldistillery.music.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="music")
@Entity
public class Song {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String artist;

	public Song() {
		super();
	}

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

	@Override
	public String toString() {
		return "Song [id=" + id + ", artist=" + artist + "]";
	}

}
