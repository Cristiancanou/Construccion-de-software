
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBY5aQ-adn58alYOZWQz7PODDF9Q8NmnUY",
    authDomain: "eter-6fc89.firebaseapp.com",
    projectId: "eter-6fc89"
  });
var db = firebase.firestore();
function agregar(){
var url=document.getElementById("url").value;
var titulo=document.getElementById("titulo").value;
var descripcion=document.getElementById("descripcion").value;
db.collection("Lugares").add({
    url: url,
    titulo: titulo,
    descripcion: descripcion
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}