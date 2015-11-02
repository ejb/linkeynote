var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // Load the viewer file
    mainWindow.loadUrl('file://' + __dirname + '/viewer.html');

    // Uncomment this if you always want fullscreen
    // mainWindow.setFullScreen(true);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
