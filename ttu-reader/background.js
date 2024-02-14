chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("https://reader.ttsu.app/")) {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      });
    }
  });
  