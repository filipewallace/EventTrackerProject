# EventTrackerProject

## Overview

This API project was to create a program that keeps track of information over time, and can implement all CRUD operations for entries in the database. My project tracks songs of the day, so a user can track their favorite song by date and see how their taste changes/grows. The project has a MySQL database that has the song entries. The database is managed by Spring Data JPA (which allows the repository and service interfaces for the query database operations) and Spring REST services (which allows the CRUD operations to be performed with the more concise and efficient controller methods).

## Technologies Used
* Java
* JUnit Testing
* Spring Data JPA
* Spring REST
* Spring Tool Suite
* Atom
* GitHub
* MAMP
* MySQL
* Gradle
* Postman

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
