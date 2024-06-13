chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);
    if (!url.hash) { // Only redirect if no hash is present                                                                                                                                                      
      return {redirectUrl: details.url + "#success"};
    }
  },
  {urls: ["*://*.zoom.us/j/*"]}, // Restricts the listener to Zoom meeting links                                                                                                                                 
  ["blocking"]
); 
