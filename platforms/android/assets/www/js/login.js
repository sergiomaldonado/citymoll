
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDn2BVpslXgVXFNY8exbX7zeZ-LetTwxPU",
  authDomain: "citymoll-aa08a.firebaseapp.com",
  databaseURL: "https://citymoll-aa08a.firebaseio.com",
  storageBucket: "citymoll-aa08a.appspot.com",
};
  firebase.initializeApp(config);

   function login(){


     var mail = document.getElementById('email');
     var pass = document.getElementById('pass');
     var boton = document.getElementById('btn_login');
     boton.addEventListener("click", enviarform);

   }

     function enviarform(Nombre, Mail, Fecha, Password){


     var m = mail.value;
     var p = pass.value;
     var db = firebase.database();


     if (m == "", p == ""){

      var $toastContent = $('<span>Completa todos los campos</span>');
      Materialize.toast($toastContent, 5000);


  }else{
    firebase.auth().signInWithEmailAndPassword(m, p).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    }
}
