let formulaire =document.getElementById("form") ;
console.log(form);
form.addEventListener('submit',function Myfunction(event){

    event.preventDefault();

    let username =document.getElementById("username") ;
    let email =document.getElementById("email") ;
    let password =document.getElementById("password") ;
    let password2 =document.getElementById("password2") ;

    let usernameMessage =document.getElementById("usernameMessage") ;
    let emailMessage =document.getElementById("emailMessage") ;
    let passwordMessage =document.getElementById("passwordMessage") ;
    let password2Message =document.getElementById("password2Message") ;

    if(username.value ==="" || username.value.length<3 ){
                username.style.border="4px solid #e74c3c" ;
                usernameMessage.textContent="Veuillez saisir 3 caracteresa au minimum" ;
                usernameMessage.style.color="#e74c3c" ;
    }
    else if(username.value.length>15){
        username.style.border="4px solid #e74c3c" ;
        usernameMessage.textContent="Vous avez depasser les 15 caracteres " ;
        usernameMessage.style.color="#e74c3c" ;
    }
    else{
        username.style.border="4px solid #2ecc71" ;
        usernameMessage.textContent="";
    }
  const expression = /^(([^<>()[].,;:s@]+(.[^<>()[].,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if(expression.test(email.value)){
        username.style.border="4px solid #2ecc71" ;
        usernameMessage.textContent="";
    }
    else{
        email.style.border="4px solid #e74c3c" ;
        emailMessage.textContent=" votre email est incorrect,veuiller resaisir a nouveau " ;
        emailMessage.style.color="#e74c3c" ;
    }

    if(password.value ==="" || password.value.length<8){
        password.style.border="4px solid #e74c3c" ;
        passwordMessage.textContent="votre mot de passe doit contenir 8 caracteres au minimum" ;
        passwordMessage.style.color="#e74c3c" ;
    }
    else if(password.value.length>15){
        password.style.border="4px solid #e74c3c" ;
        passwordMessage.textContent="Vous avez depasser le nombre de caracteres";
        passwordMessage.style.color="#e74c3c" ;
    }
    else{
        password.style.border="4px solid #2ecc71" ;
        passwordMessage.textContent="";
    }
    if(password2.value !== password.value || password2.value ===""){
        password2.style.border="4px solid #e74c3c" ;
        password2Message.textContent="Veuillez confimer le mot de passe";
        password2Message.style.color="#e74c3c" ;
    }
    else{
        password2.style.border="4px solid #2ecc71" ;
        password2Message.textContent="";
    }

})