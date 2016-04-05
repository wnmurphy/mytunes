// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function () {
    this.render();
    var context = this;

    this.collection.map(function (song) {
      song.on('played', function () {
        context.render();
      }, this);
    });
  },

  render: function () {
    // to preserve event handlers on child nodes, we call .detach() on them before overwriting with .html()
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function (song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
// Render everything underneath the player
// Creates a table to display a LibraryEntryView for each song.
// Calls LibraryEntryView for each song in sollection.
  // For each, adds a table row with artist, song, and click event listener to play.
