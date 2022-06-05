package com.skilldistillery.music.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public List<Song> songsByArtist(String artist) {
		return repo.findByArtist(artist);
	}

	@Override
	public Song getSong(Integer songID) {
		Optional<Song> songOpt = repo.findById(songID);
		Song song = null;
		if (songOpt.isPresent()) {
			song = songOpt.get();
		}

		return song;
	}

	@Override
	public Song create(Song song) {
		repo.saveAndFlush(song);
		return song;
	}

	@Override
	public boolean delete(Integer songID) {
		boolean deleted = false;
		Optional<Song> songOpt = repo.findById(songID);
		Song song = null;
		if (songOpt.isPresent()) {
			song = songOpt.get();
			repo.delete(song);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public Song updateSong(Integer id, Song song) {
		Song update = null;
		Optional<Song> opt = repo.findById(id);
		if (opt.isPresent()) {
			update = opt.get();
			update.setArtist(song.getArtist());
			update.setAlbum(song.getAlbum());
			update.setSongTitle(song.getSongTitle());
			update.setAppleMusicLink(song.getAppleMusicLink());
			update.setDate(song.getDate());
			update.setDescription(song.getDescription());
			repo.saveAndFlush(update);
		}
		return update;

	}

	@Override
	public List<Song> keywordSearch(String keyword, String keyword2) {
		return repo.findBySongTitleLikeOrArtistLike(keyword, keyword2);
	}
}
