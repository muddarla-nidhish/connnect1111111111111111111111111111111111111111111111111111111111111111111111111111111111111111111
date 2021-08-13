// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgjzHxdM34w0O4LKHYWy9qXw8B_VXx00g",
    authDomain: "demotwitter-6d43b.firebaseapp.com",
    databaseURL: "https://demotwitter-6d43b-default-rtdb.firebaseio.com",
    projectId: "demotwitter-6d43b",
    storageBucket: "demotwitter-6d43b.appspot.com",
    messagingSenderId: "798796916551",
    appId: "1:798796916551:web:f649f175e846bf0b734e62"
  };
  // Initialize Firebase//
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="WELCOME "+user_name+"!!!!!!!!!!!!!!";
function add_room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        perpose:"adding room"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}









function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot)
       {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(R);
 row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat.html";
}











