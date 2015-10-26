var app = require('app');  // Module to control application life.
var fs = require('fs');
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var globalShortcut = require('global-shortcut');

var links = fs.readFileSync('links.txt', 'utf8').split('\n');
var linkIndex = 0;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform != 'darwin') {
    app.quit();
  // }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, "node-integration": false});
  mainWindow.loadUrl( 'file://' + __dirname + '/viewer.html' );      

  goToLink(0);

  mainWindow.setAspectRatio(9/16);
  // mainWindow.setFullScreen(true);
  var webContents = mainWindow.webContents;
  webContents.on('dom-ready', function(){
    console.log('ready');
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  
  globalShortcut.register('left', function() {
    goToLink( linkIndex-1 );
  });
  globalShortcut.register('right', function() {
    goToLink( linkIndex+1 );
  });
  
});

function goToLink(index) {
  if (links[linkIndex]) {
    if (links[linkIndex].substring(0,4) === 'http') {
      mainWindow.webContents.executeJavaScript( 'goToUrl("'+links[linkIndex]+'");' )
      // mainWindow.loadUrl( 'file://' + __dirname + '/viewer.html#'+links[linkIndex] );
    } else {
      
    }
    linkIndex = index;
  }
}



