const btnToggle = document.querySelector('#menico');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('menu').classList.toggle('active');
  document.getElementById('menico').classList.toggle('active1');
  console.log(document.getElementById('menu'))
});


const sunclic = document.querySelector('.sun');

sunclic.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('low').classList.toggle('brillo');
  console.log(document.getElementById('low'))
});

// verificador de usuario

// Observador del usuario
function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loginLookActivo();
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
      verificaUser();
      console.log(emailVerified);
    };
    // ...
  } else {
    loginLook();
    console.log('no activo');
    // User is signed out.
    // ...
  }
});
}
observador();

// funcion para que se habra nueva ventana al dar click en icono de inicio de seción

function abrirEnPestana(url) {
  var a = document.createElement("a");
  a.href = url;
  a.click();
}

var url="./login-sign";

// funcion para insertar icono de login cuando no hay usuario activo
function loginLook() {
  document.getElementById('loginlook2').innerHTML = `<a class="icon-login3" href="#" onclick="abrirEnPestana(url)"><svg class="bi bi-person" width="1.3em" height="1.3em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M15 16s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002zM5.022 15h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C13.516 12.68 12.289 12 10 12c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002zM10 9a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
    </svg></a>`
  document.getElementById('loginLook').classList.add('icon-login')
  document.getElementById('loginLook').innerHTML = `<a href="#" id='loginLook3'onclick="abrirEnPestana(url)"><svg class="bi bi-person" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M15 16s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002zM5.022 15h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C13.516 12.68 12.289 12 10 12c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002zM10 9a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
      </svg><span class="text-login">Iniciar Sesión</span></a>`

}

// funcion para mostrar imagen a usuario activo que ingreso con correo
function loginLookActivo() {
  document.getElementById('salir').innerHTML = `<a href="#" onclick="cerrarSesion()">Salir</a>`
  document.getElementById('loginlook2').classList.add('icon-login2')
  document.getElementById('loginlook2').removeAttribute('onclick')
  document.getElementById('loginlook2').innerHTML = `<img src="img/boy1.svg" id="image-usuario"style="width: 60px;">`
  document.getElementById('loginLook').classList.add('icon-logina')
  document.getElementById('loginLook').removeAttribute('onclick')
  document.getElementById('loginLook').innerHTML = `<div class="user"><img src="img/boy1.svg" id="image-usuario" style="width: 40px;"></div>`


}


// Cerrar sesion
function cerrarSesion() {
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      abrirEnPestana('./');
      }).catch(function(error) {
      // An error happened.
      });
}

function verificaUser() {
  document.getElementById('verifica').innerHTML = `<p style='color: red;'>VERIFICA TU CORREO</p> <p style='font-size:15px;'>Sino lo encuentras buscalo como spam</p>`
}

//popup
function popup(){
  window.open("./cómo-comprar-dominio-y-hosting", "_blank");
  window.open("https://clientes.sered.net/aff.php?aff=3505", "_self");
}

const twenty = document.querySelector('.bot');
