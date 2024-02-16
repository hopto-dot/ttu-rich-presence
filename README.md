# ッツ Rich Presence
ttu-rich-presence is a chrome extension and accompanying server that adds Discord rich presence support for [ッツ Ebook Reader](https://reader.ttsu.app/).

The extension displays the book you're reading in your Discord status, along with how long you've been reading that book.

I am not a javascript programmer but I made this extension to fill a gap of missing functionality, feel free to dis my code. And, to the devs of ッツ Ebook Reader, feel free to natively add support for this!

## [Firefox release here 🦊](https://github.com/hopto-dot/ttu-rich-presence/releases/tag/v1.0-firefox)

![image](https://github.com/hopto-dot/ttu-rich-presence/assets/66906618/573e2c12-6301-4a22-b673-b4bc176fd38f)

![image](https://github.com/hopto-dot/ttu-rich-presence/assets/66906618/cea310d0-ac03-44d6-b474-9e5a51d69dc1)

## Getting Started

To use this extension and server, following the below instructions:

### Requirements

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/downloads) (optional but recommended)

### Setting Up the Server
1. **Clone the Repository**
   
[Git method] Download the extension and rich presence server with the following commands:
```
git clone https://github.com/hopto-dot/ttu-rich-presence.git
```

[Non-git method] Download the source code for the [latest release](https://github.com/hopto-dot/ttu-rich-presence/releases/latest) (zip), unzip it, then place it where you want to store the extension and server.

2. **Run the Server**

Go into `ttu-server` and run `run_ttu_server.bat` (Windows only).

**OR**

Start the server using this command:
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
