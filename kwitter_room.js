
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCjh8TVoGriKa1RwvUAYlyRioUQwMqzuKc",
      authDomain: "blubird-d55c2.firebaseapp.com",
      databaseURL: "https://blubird-d55c2-default-rtdb.firebaseio.com",
      projectId: "blubird-d55c2",
      storageBucket: "blubird-d55c2.appspot.com",
      messagingSenderId: "175104730085",
      appId: "1:175104730085:web:cda83b0b03bba476d7850c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome " + user_name +"!";
 function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "we are trying to add a room name."
      })
      localStorage.setItem("room_name", room_name)
      window.location="kwitter_page.html"
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      chickennuggets="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=chickennuggets
      //End code
      });});}
getData();


function redirecttoroomname(name){
localStorage.setItem("room_name", name)
window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}