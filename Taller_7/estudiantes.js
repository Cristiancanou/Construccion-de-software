var perfil=document.getElementById("perfil");
var container=document.querySelector(".container");
perfil.addEventListener("click",datos);//agregar evento al boton perfil
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
 }
 function datos(){
  window.location.replace("http://localhost:5500/perfil_estudiantes.html");
 }

