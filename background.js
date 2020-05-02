console.log("background is working")

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
  console.log("onClicked works")
}
