var cuerpo=document.getElementById("cuerpo");
var modal_google=document.getElementById("modal_google");
var ingresar=document.getElementById("ingresar");
ingresar.addEventListener("click",modal) // agregar evento a el boton ingresar/entrar
var hijo_ingresar=document.getElementById("hijo_ingresar");
var validar="cristiancano@inemjose.edu.co";
var profile;
var entrar_2=document.getElementById("entrar_2");
entrar_2.addEventListener("click",iniciar);
/* Perfil google */
function onSignIn(googleUser) {
  
  profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present
  if(validar==profile.getEmail()){
    entrar_2.style.display="block";
    hijo_ingresar.innerText="Entrar";
    ingresar.addEventListener("click",iniciar);
    ingresar.removeEventListener("click",modal);
  }
}
/* /Perfil google */
/* funcion iniciar dependiendo del correo */
function iniciar() {
  if(profile.getEmail()==validar){
    window.location.replace("http://localhost:5500/estudiantes.html");
  }
}
/* /funcion iniciar dependiendo del correo */

function modal(){
    cuerpo.style.display="none";
    modal_google.style.display="block";
}
