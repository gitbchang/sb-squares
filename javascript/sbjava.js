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

 function onSuccess(googleUser) {
     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
   }
   function onFailure(error) {
     console.log(error);
   }
   function renderButton() {
     gapi.signin2.render('my-signin2', {
       'scope': 'profile email',
       'width': 240,
       'height': 50,
       'longtitle': true,
       'theme': 'dark',
       'onsuccess': onSuccess,
       'onfailure': onFailure
     });
   }

//  provider.setCustomParameters({
//   'login_hint': 'user@example.com'
// });
// $('.g-signin2').render();

// firebase.auth().signInWithRedirect(provider);
/*
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
*/

// Signout Button
/*
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
*/





}); // end of document ready
