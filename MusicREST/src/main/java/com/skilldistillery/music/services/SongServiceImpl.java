package com.skilldistillery.music.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.music.entities.Song;
import com.skilldistillery.music.repositories.SongRepository;

@Service
public class SongServiceImpl implements SongService {

	@Autowired
	private SongRepository repo;
	
	@Override
	public List<Song> getAllSongs() {
		return repo.findAll();
	}

}
