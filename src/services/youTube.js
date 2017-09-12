angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(paramObject, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: paramObject.query,
        part: 'snippet',
        key: paramObject.key,
        max: paramObject.max
      }
    }).then(function successCallback(response) {
      response = response.data.items;
      callback(response);
    }, function errorCallback(response) {
    });
  };
  
  
});

