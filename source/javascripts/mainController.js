app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller('mainController', ['$scope', 'worldWeatheronlineAPI', 'magicSeaweedAPI',
  function($scope, worldWeatheronlineAPI, magicSeaweedAPI) {

  $scope.results = [];

  getData();

  function humanDate (timestamp){
    var date = new Date(timestamp*1000);
    var hours = date.getHours();
  }

  function getData() {
      worldWeatheronlineAPI.getData()
      .success(function (data) {
        
        // var days    =    {
          
        // 'dayOne'  :  [
        //                 data[2].issueTimestamp,
        //                 data[3].issueTimestamp,
        //                 data[4].issueTimestamp,
        //                 data[5].issueTimestamp,
        //                 data[6].issueTimestamp
        //               ],

        // 'dayTwo'  :   [
        //                 data[9].issueTimestamp,
        //                 data[10].issueTimestamp,
        //                 data[11].issueTimestamp,
        //                 data[12].issueTimestamp,
        //                 data[13].issueTimestamp
        //               ],

        // 'dayThree' : [
        //                 data[16].issueTimestamp,
        //                 data[17].issueTimestamp,
        //                 data[18].issueTimestamp,
        //                 data[19].issueTimestamp,
        //                 data[20].issueTimestamp
        //               ],

        // 'dayFour'  : [
        //                 data[25].issueTimestamp,
        //                 data[26].issueTimestamp,
        //                 data[27].issueTimestamp,
        //                 data[28].issueTimestamp,
        //                 data[29].issueTimestamp
        //               ],

        // 'dayFive'  : [
        //                 data[32].issueTimestamp,
        //                 data[33].issueTimestamp,
        //                 data[34].issueTimestamp,
        //                 data[35].issueTimestamp,
        //                 data[36].issueTimestamp
        //               ]
        // };


        $scope.results = (data.data.weather[0].hourly);
        console.log($scope.results);
});
}

}]);

