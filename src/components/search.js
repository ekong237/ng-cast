angular.module('video-player')

.component('search', {
  bindings: {
    input: '<'
  },
  controller: function(youTube) {
    this.input = '';
    this.search = function(searchInput) {
      console.log(searchInput);
    };
    this.result = function() {
      
    };
  },
  templateUrl: 'src/templates/search.html'
});
