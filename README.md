# ttu rich presence
ttu-rich-presence is a chrome extension and accompanying server that adds Discord rich presence support for [ッツ Ebook Reader](https://reader.ttsu.app/).

The extension displays the book you're reading in your Discord status, along with how long you've been reading that book.

I am not a javascript programmer but I made this extension to fill a gap of missing functionality, feel free to dis my code. And, to the devs of ッツ Ebook Reader, feel free to natively add support for this!

![image](https://github.com/hopto-dot/ttu-rich-presence/assets/66906618/cea310d0-ac03-44d6-b474-9e5a51d69dc1)

## Getting Started

To use this extension and server, following the below instructions:

### Requirements

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)

### Setting Up the Server
1. **Clone the Repository**
```
git clone https://github.com/hopto-dot/ttu-rich-presence.git
cd ttu-rich-presence
```

2. **Install Dependencies**
```
cd server
npm install
```

3. **Run the Server**

Run `run_ttu_server.bat`. OR Start the server:
```
node server.js
```

➡ The Discord client must be running for the Rich Presence to display. 

### Setting Up the Extension
1. **Load the Extension into Chrome**
- Open Chrome and navigate to `chrome://extensions/`
- Make sure Developer mode is enabled at the top right
- Click "Load unpacked" and select the `ttu-rich-presence` folder

2. **Using the Extension**

➡ In order to use the extension the server must be running.
   
- Go to `https://reader.ttsu.app/` and open a book. That book with appear in your Discord rich presence.

## Contributing

Feel free to fork this repository and submit pull requests with any improvements or bug fixes.

## License

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
