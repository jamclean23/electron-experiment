const { ipcRenderer } = require('electron');

// Test Button
const testButton = document.querySelector('#testButton');

testButton.addEventListener('click', () => {
    ipcRenderer.send('request-mainprocess-action', 'blah');
    console.log('sending request');
});

ipcRenderer.on('mainprocess-response', (event, arg) => {
    console.log(arg);
});

// Directory picker
const dirButton = document.querySelector('#dirPicker');

dirButton.addEventListener('click', () => {
    ipcRenderer.send('request-mainprocess-dirpicker');
});

ipcRenderer.on('mainprocess-dirpicker-response', (event, arg) => {
    console.log(arg);
});
