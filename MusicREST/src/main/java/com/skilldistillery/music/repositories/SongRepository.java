package com.skilldistillery.music.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.music.entities.Song;

public interface SongRepository extends JpaRepository<Song, Integer> {

	List<Song> findByArtist(String artist);
	
	List<Song> findBySongTitleLikeOrArtistLike(String keyword, String keyword2);
}
