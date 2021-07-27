
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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      Room_names = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });
      localStorage.setItem("Room_names", Room_names);
      window.location = kwitter_page.html;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
