document.getElementById('changeColorBtn').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  // Define colors for a true dark mode
  const backgroundColor = '#000000'; // black
  const textColor = '#FFFFFF';       // white
  const important = 'important';

  // 1. Set the base background and text colors
  document.documentElement.style.setProperty('background-color', backgroundColor, important);
  document.documentElement.style.setProperty('color', textColor, important);

  document.body.style.setProperty('background-color', backgroundColor, important);
  document.body.style.setProperty('color', textColor, important);

  // 2. Find and set the color on the specific Forbes wrapper div
  const mainContentWrapper = document.querySelector('.main-content');
  if (mainContentWrapper) {
    mainContentWrapper.style.setProperty('background-color', backgroundColor, important);
    mainContentWrapper.style.setProperty('color', textColor, important);
  }
}