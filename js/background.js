chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#BA7262'}, function() {
    console.log("The Color is Marrom.");
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.instagram.com'},
      })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});
