//YOUR FIREBASE LINKS
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
    var user_name = localStorage.getItem("user_name")
    var room_name = localStorage.getItem("room_name")

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name1=message_data['name']
like=message_data['like']
message=message_data['message']
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'> </h4>"
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> like: "+ like+"</span> </button> <hr>"
row=name_with_tag+message_with_tag+like_button+spanwithtag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function updatelike(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value 
      update_likes=Number(likes) +1
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      })
}