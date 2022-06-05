package com.skilldistillery.music.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public List<Song> getAllSongs() {
		return svc.getAllSongs();
	}

	@GetMapping("music/{songID}")
	public Song getSong(@PathVariable Integer songID, HttpServletResponse response, HttpServletRequest request) {
		Song song = svc.getSong(songID);
		if (song == null) {
			response.setStatus(404);
		}
		return song;
	}

	@GetMapping("music/artist/{artist}")
	public List<Song> getSongsByArtist(@PathVariable String artist, HttpServletResponse response) {
		List<Song> songs = svc.songsByArtist(artist);
		if (songs == null) {
			response.setStatus(404);
		}
		return songs;
	}

	@PostMapping("music")
	public Song createSong(@RequestBody Song song, HttpServletResponse response) {
		Song songAdded = null;
		try {
			songAdded = svc.create(song);
			response.setStatus(201);
			response.setHeader("Location", "http://localhost:8085/api/songs/" + song.getId());
		} catch (Exception e) {
			response.setStatus(404);
		}
		return songAdded;
	}

	@DeleteMapping("music/delete/{songID}")
	public void deleteSongFromApp(@PathVariable Integer songID, HttpServletResponse response) {
		if (svc.delete(songID)) {
			response.setStatus(204);
		} else {
			response.setStatus(404);
		}
	}

	@PutMapping("music/{id}")
	public Song updateSong( @PathVariable("id") Integer id, @RequestBody Song newSong, HttpServletResponse resp) {
		try {
			newSong = svc.updateSong(id, newSong);
			if (newSong == null) {
				resp.setStatus(404); 
			}
		} catch (Exception e) {
			
			e.printStackTrace();
			resp.setStatus(400);
			newSong = null;
		}
		return newSong;
	}

	@GetMapping("music/search/{keyword}")
	public List<Song> getSongByKeyword(@PathVariable String keyword, HttpServletResponse response) {
		String keyword2 = keyword;
		List<Song> songs = svc.keywordSearch("%" + keyword + "%", "%" + keyword2 + "%");

		return songs;
	}
}
