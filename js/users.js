//Carga todos los usuarios al local storage
window.addEventListener('load',function() {
  var validUsers = getItemFromStorage('users');
  if (validUsers == null) {
    validUsers = [];
    validUsers.push({ usuario: "KAAC", password: "1234"});
    validUsers.push({ usuario: "ESAC",  password: "4321"});
    addItemToStorage("users",validUsers);
  }
});
