const button = document.querySelector('.button');
const drawer = document.querySelector('.drawer');

//Hidden class , calling out by javascript
const newButton = document.querySelector('.newButton');
const newDrawer = document.querySelector('.new-drawer');

const drawerControl = () => {
  button.classList.toggle('button-open');
  drawer.classList.toggle('drawer-open');
  if (button.textContent === 'open') {
    button.textContent = 'close';
  } else {
    button.textContent = 'open';
  }
};

// button.addEventListener("click", () => drawerControl());

function multiDrawerControl(button, drawer, classes) {
  button.classList.toggle(classes.buttonOpen);
  drawer.classList.toggle(classes.drawerOpen);
  if (button.textContent === classes.open) {
    button.textContent = classes.close;
  } else {
    button.textContent = classes.open;
  }
}

const classList = {
  buttonOpen: 'button-open',
  drawerOpen: 'drawer-open',
  open: 'open',
  close: 'close',
};

button.addEventListener('click', () =>
  multiDrawerControl(button, drawer, classList)
);

newButton.addEventListener('click', () =>
  multiDrawerControl(newButton, newDrawer, classList)
);
