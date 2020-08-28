

// Observador del usuario
function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('activo');
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    if (emailVerified == false) {
      verificar();
      verificaUser()
    }else {
      window.open("./", "_self")
    };
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('no activo');
  }
});
}
observador();


// // autenticacion con facebook
//
// var provider = new firebase.auth.FacebookAuthProvider()
//
//  function registrarFacebook(){
//    firebase.auth().signInWithRedirect(provider).then(function(result) {
//    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//    var token = result.credential.accessToken;
//    // The signed-in user info.
//    var user = result.user;
//    // ...
//  }).catch(function(error) {
//    // Handle Errors here.
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    // The email of the user's account used.
//    var email = error.email;
//    // The firebase.auth.AuthCredential type that was used.
//    var credential = error.credential;
//    // ...
// });
//  }
//
//
// // autenticacion con google
//
// var provider1 = new firebase.auth.GoogleAuthProvider();
//
// function registrarGoogle(){
//
//   firebase.auth().signInWithRedirect(provider1).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
//
// }
//



// Registro con correo electrónico


function registrarEmail() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      window.open("./login-sign", "_self");
      console.log(verficando);
   })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(error)
  // ...
});
}

// Inicio con correo electrónico

function ingresarEmail() {

  var email2 = document.getElementById('email2').value;
  var password2 = document.getElementById('password2').value;


  firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage)
  // ...
});
}


// Se envia Email de verificacion

function verificar() {
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}

function verificaUser() {
  document.getElementById('verif').innerHTML = `<h1>VERIFICA TU CORREO Y RECARGA</h1><p>Es probable que el correo este en spam</p>`;
  document.getElementById('hide').classList.toggle('hide1');

}

// Contraseña
function contraseña() {

  var contA = document.getElementById('passwordC').value;
  var contB = document.getElementById('password').value;
  if (contA == contB) {
    registrarEmail()
  }else {
    alert('Las contraseñas no coinciden')
  }
}


