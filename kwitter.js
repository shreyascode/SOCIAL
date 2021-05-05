

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
  
function addUser(){
  user_name=document.getElementById("user_name").nodeValue;
  localStorage.setItem("user_name",user_name);
  window.location="kwitter_room.html";
}

