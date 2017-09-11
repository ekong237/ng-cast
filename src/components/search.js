angular.module('video-player')

.component('search', {
  bindings: {
    input: '<'
  },
  controller: function(youTube) {
    this.result = function() {
      
    };
  },
  templateUrl: 'src/templates/search.html'
});
