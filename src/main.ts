import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let win: BrowserWindow = null;

function createWindow(): void {
    // create the browser window.
    win = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app.
    win.loadFile(path.join(__dirname, '../index.html'));

    // open the DevTools.
    win.webContents.openDevTools();

    // emitted when the window is closed.
    win.on('closed', () => {
        // dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

app.on('ready', createWindow);

// quit when all windows are closed.
app.on('window-all-closed', () => {
    // on OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // on OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});