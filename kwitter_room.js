// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAvzeWnDQsLDCgOG5RZUdHUh56yi4qVWtQ",
  authDomain: "kwitter1-b4a84.firebaseapp.com",
  databaseURL: "https://kwitter1-b4a84-default-rtdb.firebaseio.com",
  projectId: "kwitter1-b4a84",
  storageBucket: "kwitter1-b4a84.appspot.com",
  messagingSenderId: "394999206077",
  appId: "1:394999206077:web:95c67d6fd459f732bce7d4",
  measurementId: "G-YLLM6SLHF8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+ Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"<?div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }