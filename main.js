const {app, BrowserWindow, Menu, MenuItem} = require('electron')
const contextMenu = require('electron-context-menu');
const url = require('url')
const path = require('path')

let win

function createWindow() {
   win = new BrowserWindow({width: 768, height: 1024,minWidth: 1024,
        minHeight: 768})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}
const template = [
   {
      label: 'File',
      submenu: [
         {
            role: 'minimize'
         },
         {
            role: 'quit'
         }
      ]   
         },
   {
      label: 'Edit',
      submenu: [
         {
            role: 'undo'
         },
         {
            role: 'redo'
         },
         {
            type: 'separator'
         },
         {
            role: 'selectAll'
         },
         {
            role: 'copy'
         }

      ]
   },
   
   {
      label: 'View',
      submenu: [
         {
            role: 'reload'
         },
         {
            type: 'separator'
         },
         {
            role: 'resetzoom'
         },
         {
            role: 'zoomin'
         },
         {
            role: 'zoomout'
         },
         {
            type: 'separator'
         },
         {
            role: 'togglefullscreen'
         }
      ]
   },
   
   {
      label: 'Help',
      submenu: [
                 {
            label: 'Bible Malayalam 1.0.3'
         }
      ]
   }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
app.on('ready', createWindow)

contextMenu({
    menu: (actions, props, browserWindow) => [

        { role: 'copy' },
        { role: 'selectAll' },
        { type: 'separator' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { role: 'resetzoom' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        { role: 'close' }

    ]
});


