angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    clickVideo: '<'
  },
  controller: function() {
  },
  templateUrl: 'src/templates/videoList.html'
});
