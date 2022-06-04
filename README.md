# EventTrackerProject

## API Implementation

| Return Type | Verb | URI Mapping | Functionality |
| --- | --- | -- | -- |
| `List<Song>`| **GET** | api/music | Retrieve list of song of the day entries |
| `Song`| **GET** | api/music/{songID} | Retrieve one song of the day entry by ID |
| `Song` | **POST** | api/music | Creates a new song of the day entry |
| `List<<Song>>` | **GET** | api/music/artist/{artist} | Retrieve song of the day entries by artist |
| `Boolean` | **DELETE** | api/music/delete/{songID} | Delete a song of the day entry by it's ID |
| `Song` | **PUT** | api/music/{id} | Updates information in an existing entry by it's ID |
| `List<Song>` | **GET** | api/music/search/{keyword} | Searches song entries by a keyword|

`getAllSongs` - **GET** - api/music
`getSong` - **GET** - api/music/{songID}
`getSongsByArtist` - **GET** - api/music/{artist}
`createSong` - **POST** - api/music
`deleteSongFromApp` - **DELETE** - api/music/delete/{songID}
`updateSong` - **PUT** - api/music/{id}
`getSongByKeyword` **GET** - api/music/search/{keyword}
