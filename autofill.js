
// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"  || details.reason == "update" ){
        console.log("This is a first install or update!");
        var changesURL = chrome.extension.getURL("changes.html");
        chrome.tabs.create({"url" : changesURL});
    }
});







chrome.browserAction.onClicked.addListener(function(tab) {

  username = localStorage['username'];
  password = localStorage['password'];

  var optionsURL = chrome.extension.getURL("options.html");

  if(username == null || password == null || username == "undefined") {
    chrome.tabs.create({"url" : optionsURL});
  }
  else {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.method == "getCredentials")
        sendResponse({username: localStorage['username'], password: localStorage['password']});
      else
        sendResponse({}); // snub them.
    });


    chrome.tabs.create({"url":"https://cas.utbm.fr/login"},function(tab) {
      var tabId = tab.id;
      chrome.tabs.executeScript(tabId, {
                file: 'fill.js', runAt:"document_end"
        },
        function(tab) {
          function goBackMoodle() {
            chrome.tabs.update(tabId, {"url":"https://moodle.utbm.fr/my/"});
          }

          setTimeout(goBackMoodle, 1000);
        }
      );
    });
  }
});

