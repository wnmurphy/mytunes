//Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function (params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    // if no songs are enqueued, playFirst();

    // Listen for 'play' on any song in library
    params.library.on('play', function (song) {
      this.set('currentSong', song);
    }, this);

    // Listen for 'enqueue' on any song in library
    params.library.on('enqueue', function (song) {
      this.get('songQueue').add(song);
    }, this);
  }
});

// Creates a new instance of SongModel as currentSong.
// Creates a new instance of SongQueue as songQueue.
// Creates a play function: on 'play' event for any song in library (triggered by SongModel.play), set currentSong to that song.
