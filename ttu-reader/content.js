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

function getBookIdFromUrl(url) {
  const match = url.match(/b\?id=(\d+)/);
  return match ? match[1] : null;
}

function updateDiscordPresence() {
  const url = window.location.href;
  let details = '';
  let newBookId = getBookIdFromUrl(url);
  let startTimestamp = startTime;

  if (url.startsWith('https://reader.ttsu.app/b?id=')) {
    console.log("Starts with 'https://reader.ttsu.app/b?id='");
    const title = document.title.split(' | ')[0];
    details = title;

    if (newBookId !== currentBookId) {
      startTime = Date.now();
      startTimestamp = startTime;
      currentBookId = newBookId;
    }
  } else {
    return; // Exit if not on a book reading page
  }

  if (details == "ッツ Ebook Reader") {
    return; // Exit if the title is not correctly fetched
  }

  console.log(`Updating presence to '${details}' with start time`);

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
      updateDiscordPresence();
      sendResponse({status: "timerReset"});
  }
});
