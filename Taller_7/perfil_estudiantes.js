var imagen_perfil=document.getElementById("imagen_perfil");
var profile;
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    imagen_perfil.setAttribute("src",profile.getImageUrl());
    document.getElementById("nombre").innerText=profile.getName();
   }

