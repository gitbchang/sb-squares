$(document).ready(function(){
  $(".button-collapse").sideNav();

  var config = {
   apiKey: "AIzaSyBrVmgchOjJw9iu7ByUD_DMJtWEmYcuWPI",
   authDomain: "sb-squares.firebaseapp.com",
   databaseURL: "https://sb-squares.firebaseio.com",
   storageBucket: "sb-squares.appspot.com",
   messagingSenderId: "672482092252"
 };
 firebase.initializeApp(config);
 var database = firebase.database();

 // Creating Google Sign on
 var provider = new firebase.auth.GoogleAuthProvider();
 // Google Sign On Variables
var name;
var profile;
var email;
// $(".g-signin2").trigger();

function onSignIn(googleUser) {

       profile = googleUser.getBasicProfile();
       name = profile.getName();
       //console.log('Image URL: ' + profile.getImageUrl());
       email = profile.getEmail();
       //initiiate();
       $('.g-signin2').hide();
       console.log("You have Signed In");

   }
   function signOut() {
       var auth2 = gapi.auth2.getAuthInstance();
       auth2.signOut().then(function () {
           console.log('User signed out.');
       });
       name = null;
       email = null;
       $('#content').hide();
       $('.g-signin2').show();
       window.location = "index.html";
   }







}); // end of document ready
