angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    this.playing = exampleVideoData[0];
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
