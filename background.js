function main() {
  chrome.tabs.create({"url": "chrome://downloads"});
}

chrome.action.onClicked.addListener((tab) => {
  main();
});
