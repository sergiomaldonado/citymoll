
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDn2BVpslXgVXFNY8exbX7zeZ-LetTwxPU",
  authDomain: "citymoll-aa08a.firebaseapp.com",
  databaseURL: "https://citymoll-aa08a.firebaseio.com",
  storageBucket: "citymoll-aa08a.appspot.com",
};
  firebase.initializeApp(config);


function logout(){

  var boton = document.getElementById('btn_logout');
  boton.addEventListener("click", cerrarSesion);


}
function cerrarSesion(){

  firebase.auth().signOut().then(function() {
    alert("ya cerramos la sesion");
    // Sign-out successful.
  }, function(error) {

    alert("no cerramos la sesion");
    // An error happened.
  });
  location.reload();

}
