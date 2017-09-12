angular.module('video-player')
.service('youTube', function(params, callback) {
  // TODO
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      key: YOUTUBE_API_KEY
    } 
  }).then(function successCallback(response) {
    console.log('success');
    callback();
  }, function errorCallback(response) {
    console.log('fail');
  });
  
});

