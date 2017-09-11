angular.module('video-player')
.component('videoList', {
  controller: function() {
    this.videos = exampleVideoData;
  },
  templateUrl: 'src/templates/videoList.html'
});
