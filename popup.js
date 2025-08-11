document.getElementById('changeColorBtn').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// This function will be executed as a content script on the page
function setPageBackgroundColor() {
  document.body.style.backgroundColor = '#0000'; // A nice light yellow
}