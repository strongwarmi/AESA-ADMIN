window.addEventListener('load',function() {

  var ingresar = document.getElementById('registrar');
  ingresar.addEventListener('click',function() {

    var UsuarioInput = document.getElementById('inputUsuario');
    var passwordInput = document.getElementById('inputContraseña');
    var valid = true;

    if (UsuarioInput.value == "") {
      showMessage("user_error","No puede estar vacio");
    } else {
      showMessage("user_error","");
    }

    if (passwordInput.value == "") {
      showMessage("password_error","No puede estar vacio");
    } else {
      showMessage('password_error',"");
    }

    if (UsuarioInput.value != "" &&
        passwordInput.value != "") {

      if (authenticate(UsuarioInput.value,passwordInput.value)) {
        window.location = 'dashboard.html';
      }
    }

  });
});

function showMessage(element,message) {
  var e = document.getElementById(element);
  e.innerHTML = message;
}

function authenticate(user,password) {
  var validUsers = getItemFromStorage("users");
  if (validUsers != null) {
    var user = validUsers.filter(function(user) {
      return user.usuario == user;
    })[0];
    if (user != null) {
      return user.usuario == user && user.password == password;
    }
  }
  return false;
}
