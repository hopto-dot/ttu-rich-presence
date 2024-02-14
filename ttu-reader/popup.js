document.getElementById('pauseButton').addEventListener('click', function() {
    const button = document.getElementById('pauseButton');
    const isPaused = button.textContent.includes("Paused"); // Check if already paused
    fetch('http://localhost:3000/clear-presence', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pause: !isPaused }),
    })
    .then(response => {
        if (response.ok) {
            button.style.backgroundColor = 'lightgrey'; // Lighter grey when paused
            button.textContent = 'Cleared Rich Presence';
            console.log('Rich presence cleared.');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('resetTimerButton').addEventListener('click', function() {
    // Send a message to content script to reset startTime
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "resetTimer"});
    });
});