const form = document.getElementById("login-form");
form.onsubmit = function(e){
    e.preventDefault()
    console.log('vous avez cliqué sur le bouton de validation');
}