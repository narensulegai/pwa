window.addEventListener('beforeinstallprompt', e => {
  alert('Install pwa');
});

window.addEventListener('load', e => {
  console.log(window.webkit);
  window.webkit.messageHandlers.test.postMessage("Hello, world!");
})
