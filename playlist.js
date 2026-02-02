/*
Beatriz Galarza
Repository: https://github.com/beaglrz/cs81-module6a-review
*/

// Constructor: Creates a new playlist object
function Playlist(name) {
  // "this" refers to the new playlist being created
  this.name = name; // Playlist name
  this.songs = []; // List of songs
  this.currentSong = null; // No song playing yet
}

  // Method: Adds a song to the playlist
Playlist.prototype.addSong = function(songTitle) {
  // "this" refers to the current playlist using addSong
  this.songs.push(songTitle); // Adds song to the song array
};

// Method: Plays the first song in the playlist
Playlist.prototype.playFirst = function() {
    // "this" refers to the playlist using playFirst
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0]; // Sets the current song as the first
    console.log("Now playing:", this.currentSong); // Shows the currents song
  }
};

// Method: Skips the current song and plays the next one
Playlist.prototype.skipSong = function() {
  // "this" refers the current playlist using skipSong
  if (this.songs.length > 1) {
    this.songs.shift(); // Removes the first song
    this.currentSong = this.songs[0]; // Plays the next song
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// Method: Displays playlist name and songs
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name); // Shows playlist name
  console.log("Songs:", this.songs.join(", ")); // Shows song list
};


// Method (New): Displays the number of songs in the playlist
Playlist.prototype.getSongCount = function () {
  // `this` refers to the current playlist
  console.log("Total songs:", this.songs.length);
};


let myMix = new Playlist("My Chill Mix"); // Creates playlist
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst(); // Plays first song
myMix.skipSong(); // Skips the next song
myMix.listSongs();// List playlist and songs
  
// Improvement Suggestion: Prevent from adding a duplicate song to the playlist.
