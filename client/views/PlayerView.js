// Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  el: '<audio controls autoplay />',

  initialize: function () {
  },

  setSong: function (song) {
    this.model = song;
    this.render();
  },

  render: function () {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  events: {
    'ended': function () {
      this.model.ended();
    }
  }
});

// sets song to a SongModel
// displays current SongModel or SongModel's URL
