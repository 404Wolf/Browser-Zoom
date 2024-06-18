window.addEventListener('load', () => {
  const findAndRemoveIfExists = (selector) => {
    const element = document.querySelector(selector);
    if (element) element.remove();
  }

  // Remove the icons and text that says to use the app
  findAndRemoveIfExists('div.ifP196ZE.x2RD4pnS');
  findAndRemoveIfExists('hr[role="presentation"]');
  findAndRemoveIfExists('h3[class="rm-presentation"]');
  const zoomAppSpans = document.querySelectorAll('span');
  const targetSpan = [...zoomAppSpans].find(span => span.textContent.includes("with the Zoom"));
  if (targetSpan) targetSpan.childNodes[0].textContent = "Hate the Zoom Desktop App? "

  // Click the "Join from Your Browser" button
  const elements = [...document.querySelectorAll('a[role="button"][tabindex="0"]')];
  const element = elements.find((el) => el.innerText === 'Join from Your Browser');
  if (element) {
    element.click();
  }
})

