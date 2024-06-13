chrome.webNavigation.onBeforeNavigate.addListener(details => {
  zoomPattern = /^https:\/\/\w+\.\w+\.\w+\/j\/\d{10}\?pwd\=[a-zA-Z0-9]{32}$/;

  if (details.url.match(zoomPattern)) {
    chrome.tabs.update(details.tabId, {url: `${details.url}#success`});

    const selector = '#zoom-ui-frame > div.bhauZU7H > div > div.pUmU_FLW > h3:nth-child(2) > span > a';
    const element = document.querySelector(selector);
    if (element) {
      element.click();
    } else {
      console.error('Element not found');
    }
  }
}, {url: [{urlMatches: ".*"}]});; 
