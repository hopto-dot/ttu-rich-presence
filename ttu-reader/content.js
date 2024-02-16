function observeTitleChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        updateDiscordPresence();
      }
    });
  });

  const titleElement = document.querySelector('title');
  if (titleElement) {
    observer.observe(titleElement, { childList: true });
  }
}

let currentBookId = null;
let startTime = null;
let lastStartTimestamp = null;

function getBookIdFromUrl(url) {
  const match = url.match(/b\?id=(\d+)/);
  return match ? match[1] : null;
}

function updateDiscordPresence() {
  const url = window.location.href;
  let details = '';
  let newBookId = getBookIdFromUrl(url);
  let startTimestamp = lastStartTimestamp || startTime;

  if (url.startsWith('https://reader.ttsu.app/b?id=')) {
    const title = document.title.split(' | ')[0];
    details = title;

    if (newBookId !== currentBookId) {
      if(currentBookId !== null) {
        startTime = Date.now(); // Book change, reset the timer
      }
      startTimestamp = startTime;
      currentBookId = newBookId;
    }
  
  // Neither of these else ifs will reset the timer but they do each have their own status
  } else if (url === 'https://reader.ttsu.app/manage') {
    details = "Managing books";
    startTimestamp = null;
  } else if (url === 'https://reader.ttsu.app/settings') {
    details = "In settings";
    startTimestamp = null;
  } else if (url === 'https://reader.ttsu.app/statistics') {
    details = "Viewing stats";
    startTimestamp = null;

  } else {
    return;
  }

  if (details === "ッツ Ebook Reader") {
    return; // The title not correctly fetched
  }

  console.log(`Updating presence to '${details}' with start time: ${startTimestamp}`);

  fetch('http://localhost:3000/update-presence', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ details, startTimestamp }),
  })
  .catch(console.error); 
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(observeTitleChanges, 1); // Start observing changes once the page is fully loaded
} else {
  document.addEventListener("DOMContentLoaded", observeTitleChanges);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "resetTimer") {
    startTime = Date.now();
    lastStartTimestamp = null;
    updateDiscordPresence();
    sendResponse({status: "timerReset"});
  }
});
