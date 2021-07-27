
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB5gxSPncHcLN5UyU3hij5TNwiibNvS4zI",
    authDomain: "the-kwitter-app.firebaseapp.com",
    databaseURL: "https://the-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "the-kwitter-app",
    storageBucket: "the-kwitter-app.appspot.com",
    messagingSenderId: "426738177233",
    appId: "1:426738177233:web:ad2659876918eb88ab21f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }