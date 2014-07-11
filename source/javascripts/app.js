var app = angular.module('beachday',[]);

$(document).ready(function() {
  //splash 
  function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -0 + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};
});