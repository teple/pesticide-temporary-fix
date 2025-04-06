// v2
// (function(window, document){

//   'use strict';

//   // inject the pesticide CSS
//   function toggleAssets(tab) {
//     var injector = '';

//     // logic test if the injected assets exists
//     injector += 'if (document.getElementById("pesticideCSS")) {';

//     //if they exist, remove them
//     injector += 'document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideCSS"));';

//     //if they don't exist, inject them
//     injector += '} else {';

//     injector += 'pesticideCSS = document.createElement("link");';
//     injector += 'pesticideCSS.rel = "stylesheet";';
//     injector += 'pesticideCSS.type = "text/css";';
//     injector += 'pesticideCSS.href = chrome.extension.getURL("/pesticide.min.css");';
//     injector += 'pesticideCSS.id = "pesticideCSS";';
//     injector += 'document.getElementsByTagName("head")[0].appendChild(pesticideCSS);';

//     //close logic test
//     injector += '}';

//     chrome.tabs.executeScript({code: injector});
//   }

//   chrome.browserAction.onClicked.addListener(function(tab){
//     toggleAssets(tab);
//   });

// }(window, document));
// ~v2

// v3
;(function () {
  'use strict'

  function toggleAssets(tabId) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        const existingCSS = document.getElementById('pesticideCSS')
        if (existingCSS) {
          existingCSS.remove()
        } else {
          const pesticideCSS = document.createElement('link')
          pesticideCSS.rel = 'stylesheet'
          pesticideCSS.type = 'text/css'
          pesticideCSS.href = chrome.runtime.getURL('pesticide.min.css')
          pesticideCSS.id = 'pesticideCSS'
          document.head.appendChild(pesticideCSS)
        }
      },
    })
  }

  chrome.action.onClicked.addListener((tab) => {
    toggleAssets(tab.id)
  })
})()
// ~v3
