$(document).ready(function() {
    // navigation bar collapse on minimize window
    $(".button-collapse").sideNav();
    // sign out of google acount
    $(".signout").on("click", signOut);

    var config = {
        apiKey: "AIzaSyBrVmgchOjJw9iu7ByUD_DMJtWEmYcuWPI",
        authDomain: "sb-squares.firebaseapp.com",
        databaseURL: "https://sb-squares.firebaseio.com",
        storageBucket: "sb-squares.appspot.com",
        messagingSenderId: "672482092252"
    };
    firebase.initializeApp(config);
    var database = firebase.database();


    // Google Sign On Variables
    var name;
    var profile;
    var email;
    // $(".g-signin2").trigger();

    function onSignIn(googleUser) {
        profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

        $('.g-signin2').hide();
    }


    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
            console.log('User signed out.');
        });
        name = null;
        email = null;
        $('.g-signin2').show();
        window.location = "index.html";
    }



    database.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log(profile.getEmail() + " has signed in");
        } else {
            // No user is signed in.
        }
    });







}); // end of document ready

$('.g-signin2').trigger();
