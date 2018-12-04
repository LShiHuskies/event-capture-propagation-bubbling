const divs = document.querySelector('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling
}

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));


button.addEventListener('click', () => {
  console.log('clicked!!!');
}, {
  once: true
});
