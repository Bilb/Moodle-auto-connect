

chrome.runtime.sendMessage({method: "getCredentials"}, function(response) {
  // fill username & password fields with informations got
  document.getElementById('username').value = response.username;
  document.getElementById('password').value = response.password;

  button_submit = document.getElementsByName("submit")[0];
  if (button_submit) {
    button_submit.click();
  }
});
