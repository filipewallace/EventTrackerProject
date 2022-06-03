package com.skilldistillery.music.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.music.entities.Song;
import com.skilldistillery.music.services.SongService;

@RequestMapping("api")
@RestController
public class SongController {

	@Autowired
	private SongService svc;
	
	@GetMapping("music")
	public List<Song>  getAllSongs() {
		return svc.getAllSongs();
	}
}
