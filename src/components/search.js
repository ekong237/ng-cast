angular.module('video-player')

.component('search', {
  bindings: {
    input: '<',
    getvideo: '<'
  },
  controller: function(youTube) {
    

    //this.searchInput = this.query;
    this.result = () => {
      var paramObject = {
        query: this.query || '',
        max: 5,
        key: YOUTUBE_API_KEY
      };
      console.log('getvideo', typeof this.getvideo);
      youTube.search(paramObject, this.getvideo);
    };
    
  },
  templateUrl: 'src/templates/search.html'
});
