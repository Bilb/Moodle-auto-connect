// manage saving of options to localstorage

function save_options() {
  // username
  var username_input = document.getElementById("username");
  var username = username_input.value;

  //password
  var password_input = document.getElementById("password");
  var password = password_input.value;
  
  if(!username || !password)
    return;

  localStorage['username'] = username;
  localStorage['password'] = password;
  alert('Settings saved, \nyou can now click on Moodle auto-connect icon to connect to Moodle :)');
}

// Restores options from localStorage.
function restore_options() {
  var username_input = document.getElementById("username");
  var password_input = document.getElementById("password");

  var username = localStorage['username']
  var password = localStorage['password']
  
  username_input.value = username;
  password_input.value = password;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);