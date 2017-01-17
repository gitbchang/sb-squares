$(document).ready(function() {
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
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
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



        //  $('.g-signin2').hide();
        console.log("You have Signed In");
        console.log(name);
        console.log(email);



    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
            console.log('User signed out.');
        });
        name = null;
        email = null;
        $('#content').hide();
        $('.g-signin2').show();
        window.location = "index.html";
    }

    $(".signout").on("click", signOut);







}); // end of document ready
