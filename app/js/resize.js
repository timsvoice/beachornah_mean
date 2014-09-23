//splash 
function resizesplash(divId) {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights +0 + "px";
  }

  resizesplash();
  
  window.onresize = function() {
    resizesplash();
};

// $( document ).ready(function() {
//     function resizesplash(divId) {
//       var heights = window.innerHeight;
//       //subtract any footer/header height to ensure a proper fit
//       document.getElementById(divId).style.height = heights -0 + "px";
//   }
//   //resize element as user resizes window
//   resizesplash();
//   window.onresize = function() {
//       resizesplash(divId);
// };

// resizesplash("#input-splash");
// resizesplash("#results-splash");
// });

// angular.element(document).ready(function() {
//     function resizesplash() {
//       var heights = window.innerHeight;
//       //subtract any footer/header height to ensure a proper fit
//       document.getElementById("splash").style.height = heights -0 + "px";
//   }
//     //resize element as user resizes window
//     resizesplash();
//     window.onresize = function() {
//     resizesplash();
// };

// });