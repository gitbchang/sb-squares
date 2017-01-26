$(document).ready(function() {
    // navigation bar collapse on minimize window
    $(".button-collapse").sideNav();
    // sign out of google acount
    // $(".signout").on("click", signOut);
    var randomNumArray = [];
    generateSquares();
    loopSquares();
    getRandomArray();
    // placeNumber();

    function placeNumber(){
        var allSquares = $(".square");
        for(var i = 1; i < 11; i++){
            allSquares.data(i).text(randomNumArray[i]);

        }
    }


    function getRandomArray() {

        while(randomNumArray.length < 10){
            var random = Math.floor(Math.random() * 10);
            if(randomNumArray.indexOf(random) === -1){
                randomNumArray.push(random);
                console.log(random);
            }
        }
        console.log(randomNumArray);


    }

    function loopSquares(){
        var allSquares = $(".square");
        // console.log(allSquares);
        allSquares.each(function(e){
            $(this).attr("data-number", e);
            $(this).text(e);
        });

    }

    function generateSquares() {

        for (var x = 0; x < 10; x++) {
            var newRow = $("<div>");
            newRow.addClass("row");
            for (var i = 0; i < 11; i++) {
                var newSquare = $("<div>");
                newSquare.addClass("col square");

                newRow.append(newSquare);
            }
            $(".playArea").append(newRow);
        }

    }




    var config = {
        apiKey: "AIzaSyBrVmgchOjJw9iu7ByUD_DMJtWEmYcuWPI",
        authDomain: "sb-squares.firebaseapp.com",
        databaseURL: "https://sb-squares.firebaseio.com",
        storageBucket: "sb-squares.appspot.com",
        messagingSenderId: "672482092252"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    var provider = new firebase.auth.GoogleAuthProvider();

/*
    // Google Sign On Variables
    var name;
    var profile;
    var email;
    // $(".g-signin2").trigger();

    function onSignIn(googleUser) {
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



        profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

        $('.g-signin2').hide();

  }
  /*

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



    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log(profile.getEmail() + " has signed in");
        } else {
            // No user is signed in.
        }
    });
*/







}); // end of document ready
