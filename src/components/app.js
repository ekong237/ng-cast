angular.module('video-player')
.component('app', {
  bindings: {
  },
  controller: function() {
    this.videos = exampleVideoData;
    this.selectVideo = (i) => {
      this.currentVideo = this.videos[i];
    };
    this.searchResults = (resultVideo) => {
      this.videos = resultVideo;
      //console.log(this.videos, resultVideo);
    };
    this.currentVideo = this.videos[0];
  },
  templateUrl: 'src/templates/app.html'
});
