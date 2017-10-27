
//it will reloade autometic below's code.
//'use strict';

const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width:800, height:600})
  win.loadURL(`file://${__dirname}/index.html`)
})

//it will reloade autometic below's code.
//require('electron-reload')(__dirname);
