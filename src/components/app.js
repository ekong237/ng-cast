angular.module('video-player')
.component('app', {
  bindings: {
  },
  controller: function() {
    this.selectVideo = (i) => {
      this.currentVideo = exampleVideoData[i];
      console.log('selectVideo!!!!!!!', i);
    };
    this.searchResults = function() {};
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
  },
  templateUrl: 'src/templates/app.html'
});
