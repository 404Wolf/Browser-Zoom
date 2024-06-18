browser.webNavigation.onCommitted.addListener(details => {
  zoomPattern = /^https:\/\/(\w+\.)?\w+\.\w+\/j\/\d{10}\?pwd\=[a-zA-Z0-9]{32}$/;
  if (details.url.match(zoomPattern))
    browser.tabs.update(details.tabId, {url: `${details.url}#success`});
}, {url: [{urlMatches: ".*"}]});;


