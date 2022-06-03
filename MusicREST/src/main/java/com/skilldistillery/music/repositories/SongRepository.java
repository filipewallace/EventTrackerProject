package com.skilldistillery.music.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.music.entities.Song;

public interface SongRepository extends JpaRepository<Song, Integer> {

}
