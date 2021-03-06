// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function (play) {
    // Triggering an event here will also trigger the event on the collection
    if(play !== false){
      this.trigger('play', this);
      this.set('playCount', this.get('playCount') + 1);
      this.trigger('played', this);
    }
  },

  enqueue: function () {
    this.trigger('enqueue', this);
  },

  dequeue: function () {
    this.trigger('dequeue', this);
  },

  ended: function () {
    this.trigger('ended', this);
  }

});
