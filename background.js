console.log("background running")

chrome.browserAction.onClick.addListener(buttonClicked);

function buttonClicked() {
  console.log("does this work?")
}
