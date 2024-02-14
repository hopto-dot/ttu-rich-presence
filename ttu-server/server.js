const express = require('express');
const cors = require('cors'); // Import CORS module
const app = express();
const PORT = 3000;
const { Client } = require('discord-rpc');
const clientId = '1207008423078789140'; // Replace with your Discord Application Client ID

const rpc = new Client({ transport: 'ipc' });
let connected = false;

rpc.on('ready', () => {
  console.log('Discord RPC connected.');
  connected = true;
});

// Use CORS middleware to allow all origins
app.use(cors());

app.use(express.json());

app.post('/update-presence', (req, res) => {
  if (!connected) {
    console.log('Discord RPC not connected.');
    res.sendStatus(500);
    return;
  }

  const { details, startTimestamp } = req.body;
  rpc.setActivity({
    details,
    startTimestamp,
    largeImageKey: 'ttu',
    instance: false,
  });

  res.sendStatus(200);
});

app.post('/clear-presence', (req, res) => {
  if (!connected) {
      console.log('Discord RPC not connected.');
      res.sendStatus(500);
      return;
  }

  rpc.clearActivity().then(() => {
      console.log('Rich presence cleared.');
      res.sendStatus(200);
  }).catch(error => {
      console.error(error);
      res.sendStatus(500);
  });
});


rpc.login({ clientId }).catch(console.error);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
