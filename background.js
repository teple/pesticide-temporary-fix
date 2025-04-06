chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
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
})
