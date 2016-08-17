var config = {
  apiKey: "AIzaSyDn2BVpslXgVXFNY8exbX7zeZ-LetTwxPU",
  authDomain: "citymoll-aa08a.firebaseapp.com",
  databaseURL: "https://citymoll-aa08a.firebaseio.com",
  storageBucket: "citymoll-aa08a.appspot.com",
};
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

    window.location="../views/home.html";
      // User is signed in.
    } else {

      console.log("No hay usuario logeado");
      var data = firebase.auth().currentUser;
      var uid = data.uid;
      console.log(uid);
      // No user is signed in.
    }
  });
