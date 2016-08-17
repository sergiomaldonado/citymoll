
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDn2BVpslXgVXFNY8exbX7zeZ-LetTwxPU",
  authDomain: "citymoll-aa08a.firebaseapp.com",
  databaseURL: "https://citymoll-aa08a.firebaseio.com",
  storageBucket: "citymoll-aa08a.appspot.com",
};
  firebase.initializeApp(config);

    function registro(){

     var nombre = document.getElementById('nombre');
     var mail = document.getElementById('email');
     var fecha = document.getElementById('fecha');
     var pass = document.getElementById('pass');
     var boton = document.getElementById('btn_cuenta');
     boton.addEventListener("click", enviarform);

   }

     function enviarform(Nombre, Mail, Fecha, Password){

    var m = mail.value;
     var n = nombre.value;
     var f = fecha.value;
     var p = pass.value;
     var db = firebase.database();


     if (n == "", m == "", f == "", p == ""){

      var $toastContent = $('<span>Completa todos los campos</span>');
      Materialize.toast($toastContent, 5000);


  }else{
    firebase.auth().createUserWithEmailAndPassword(m, p).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
     });


     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {


         console.log("Usuario logeado");
         var data = firebase.auth().currentUser;
         var uid = data.uid;
         console.log(uid);

         db.ref('Usuarios/' + uid).set({

         mail : m,
         nombre : n,
         fecha : f,
         contrasena : p


           });
         // User is signed in.
       } else {

         console.log("No hay usuario logeado");
         var data = firebase.auth().currentUser;
         var uid = data.uid;
         console.log(uid);
         // No user is signed in.
       }
     });

    }
}
