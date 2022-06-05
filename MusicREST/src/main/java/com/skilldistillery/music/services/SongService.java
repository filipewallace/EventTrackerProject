package com.skilldistillery.music.services;

import java.util.List;

import com.skilldistillery.music.entities.Song;

public interface SongService {

	List<Song> getAllSongs();

	List<Song> songsByArtist(String artist);

	Song getSong(Integer songID);

	Song create(Song song);

	boolean delete(Integer songID);

	Song updateSong(Integer songID, Song song);

	List<Song> keywordSearch(String keyword, String keyword2);
}
