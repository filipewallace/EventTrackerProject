window.addEventListener("load", function () {
  console.log("Script loaded");

  init();
});

function init() {
	document.songForm.lookup.addEventListener('click', function(event){
		event.preventDefault();
		var songId = document.songForm.songId.value;
		if(!isNaN(songId) && songId > 0) {
			getSong(songId);
		}
	});
  // console.log("in init() still");
  // TODO: set up event listeners for buttons etc
// xhr.open('PUT', 'api/cc/' + ccId);
// xhr.send(JSON.stringify(updatedSong));
// xhr.open('DELETE', 'api/cc/' + ccId);

document.newEntryForm.newEntryButton.addEventListener('click', function(evt){
	evt.preventDefault();
	postNewSongEntry(evt);	
		});

document.deleteEntryForm.deleteEntryButton.addEventListener('click', function(e){
	e.preventDefault();
	let songId = document.deleteEntryForm.songId.value;
	deleteEntry(songId);	
		});

/*document.updateEntryForm.updateEntryButton.addEventListener('click', function(e){
	e.preventDefault();
	let songId = document.updateEntryForm.songId.value;
	updateEntry(songId);	
		});*/

document.getElementById("aggrButton").addEventListener('click', function(e){
	e.preventDefault();
	// let songs = document.
	aggregateSongs(music);	
		});





function getSong(songId) {
	console.log('getSong(): songId=' + songId);
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/music/' + songId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let song = JSON.parse(xhr.responseText);
				console.log(song.songTitle);
				console.log(song);
				displaySong(song);
			}
		}
		else {
				// console.error('Song entry not found.')
				let div = document.getElementById('songData');
				div.textContent = 'Song entry not found';
			}
		}
xhr.send();
};

function displaySong(song) {
	var dataDiv = document.getElementById('songData');
	dataDiv.textContent = '';
	// TODO:
	// * Create and append elements to the data div to display:
	// * Song Title (h1) and Artist (blockquote).
	// * Album, rdescription, and appleMusicLink as an unordered list.
	
		let h1 = document.createElement('h1');
		h1.textContent = song.songTitle;
		dataDiv.appendChild(h1);
		let bq = document.createElement('blockquote');
		bq.textContent = song.artist;
		dataDiv.appendChild(bq);
		let ul = document.createElement('ul');
		let li = document.createElement('li');
		li.textContent = song.album;
		ul.appendChild(li);
		li = document.createElement('li');
		li.textContent = song.description;
		ul.appendChild(li);
		
		dataDiv.appendChild(ul);
		
}

function postNewSongEntry(event) {
	let form = document.newEntryForm;
    let newSong = {
        artist         : form.artist.value,
        album          : form.album.value,
        songTitle      : form.songTitle.value,
        appleMusicLink : form.appleMusicLink.value,
        description    : form.description.value,
        albumURL       : form.albumURL.value,
	};
	console.log(newSong);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/music');
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 201 || xhr.status === 200) {
				let savedSong = JSON.parse(xhr.responseText);
				displaySong;
                alert('New song entry has been added!');
                init();

                
        }
        else {
          console.error('Error creating entry, status=' + xhr.status);
          console.error(xhr.responseText);
          displayError('Invalid song entry data.');
        }
      }
    };
    xhr.setRequestHeader('Content-type','application/json')
    xhr.send(JSON.stringify(newSong));
}

function deleteEntry(e) {
console.log(e);

let xhr = new XMLHttpRequest();
xhr.open('DELETE', 'api/music/delete/' + e);
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		if (xhr.status === 204) {
			alert('Song has been successfully deleted!');
			init();
		}
	else {
		alert('Song entry could not be deleted.');
		console.error('Error deleting entry, status = ' + xhr.status);
		console.error(xhr.responseText);
	} 
	}
};
xhr.send(null);

}
};


 /*function update(songId) {
	let form = document.updateEntryForm;
	let updatedSong = {
		id             : form.artist.songId,
		artist         : form.artist.value,
        album          : form.album.value,
        songTitle      : form.songTitle.value,
        appleMusicLink : form.appleMusicLink.value,
        description    : form.description.value,
        albumURL       : form.albumURL.value,
	};

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/music/' + songId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let song = JSON.parse(xhr.responseText);
				console.log(song);
			init();			}
		}
		else {
			console.error('Error updating this song entry, status = ' + xhr.status);
			console.error(xhr.responseText);
		}
	}

xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(updatedSong));

};*/

/*function update(songId) {
	console.log(songId);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/music/' + songId);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				console.log("in if");
				let song = JSON.parse(xhr.response);
				displaySong(song);
			} else {
				console.log("Update request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let form = document.updateEntryForm;
	let updatedSong = {
		id             : form.artist.songId,
		artist         : form.artist.value,
        album          : form.album.value,
        songTitle      : form.songTitle.value,
        appleMusicLink : form.appleMusicLink.value,
        description    : form.description.value,
        albumURL       : form.albumURL.value,
	};
	xhr.send(JSON.stringify(updatedSong));
}*/

function update(songId) {
	let form = document.updateEntryForm;
	let updatedSong = {
		id             : form.artist.id,
		artist         : form.artist.value,
        album          : form.album.value,
        songTitle      : form.songTitle.value,
        appleMusicLink : form.appleMusicLink.value,
        description    : form.description.value,
        albumURL       : form.albumURL.value,
	};
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", `api/music/${songId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				updatedContestant = JSON.parse(xhr.responseText);
				displaySong(updatedSong);
			} else {
				console.error(xhr.status + ": " + xhr.responseText);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	/*xhr.send(JSON.stringify(updatedSong));*/
	xhr.send();
	updateEntryForm.reset();
}




function getAllEntries() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/music");
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status < 400){
				let data = xhr.responseText;
				let songs = JSON.parse(data);
				displayAllEntries(allSongs);
				aggregateSongs(songs);

			}
			else{
				let divError = document.getElementById("songList");
				divError.textContent = "Error loading song entries.";
			}
		}
	}
	xhr.send();
};

function displayAllEntries(songs) {
	let songListDiv = document.getElementById("songList");
	let songTable = document.createElement("table");
	songListDiv.appendChild(songTable);
	
	songs.forEach(function(value, index, array) {
		let tableRow = document.createElement("tr");
		songTable.appendChild(tableRow);
		tableRow.addEventListener("click", function(e){
			e.preventDefault;
			getSong(value.songId)});
		let id = document.createElement("input");
			id.type = "hidden";
			id.value = value.id;
		let td = document.createElement("td");
			td.textContent = value.songTitle;
			tableRow.appendChild(td);
		let td1= document.createElement("td");
			td1.textContent = value.artist;
			tableRow.appendChild(td1);
		let td2 = document.createElement("td");
			td2.textContent = value.description;
			tableRow.appendChild(td2);
		let td3 = document.createElement("td");
			td3.textContent = value.album;
			tableRow.appendChild(td3);
		let td4 = document.createElement("td");
			td4.textContent = value.appleMusicLink;
			tableRow.appendChild(td4);
	});

};



function aggregateSongs(songs){
	let counter = 0;
	for (let i = 0; i < songs.length; i ++){
		counter++;
	}

	let aggregateDiv = document.getElementById("aggregateDiv");
	let h3 = document.createElement("h3");
		h3.textContent = "You have " + counter + " of song entries!";
		aggregateDiv.appendChild(h3);
}

// function displayAllEntries(songs) {

// 		var dataDiv = document.getElementById('allSongData')
// 		dataDiv.textContent = '';
// 		var newTable - document.createElement('table');
// 		var tableHead = document.createElement('thead');
// 		var headRow = document.createElement('tr');

// 		var songIdHead = document.createElement('th');
// 		var songTitleHead = document.createElement('th');
// 		var artistHead = document.createElement('th');
// 		var albumHead = document.createElement('th');
// 		var albumURLHead = document.createElement('th');
// 		var appleMusicLinkHead = document.createElement('th');

// 		songIdHead.textContent = 'Song ID#';
// 		songTitleHead.textContent = "Song Title:";
// 		artistHead.textContent = "Artist:";
// 		albumHead.textContent = "Album:";
// 		albumURLHead.textContent = "Album Image URL:";
// 		appleMusicLinkHead.textContent = "Apple Music Link:";

// 		let tableBody = document.createElement('tbody');

// 		for(let i = 0; i < songs.length; i++) {
// 			let newRow = document.createElement('td');
// 			let titleName = document
// 		}

// }