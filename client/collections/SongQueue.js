// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // Extends Songs, sets model to SongModel

  initialize: function(){
  },

  playFirst: function(){
    this.at(0).play();
  }
});