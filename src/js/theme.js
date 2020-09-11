'use strict';
const refs = {
  switchInput: document.querySelector('input.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const chosenTheme = () => {
  if (JSON.parse(localStorage.getItem('Theme')) === Theme.DARK) {
    refs.switchInput.checked = true;
    darkTheme();
  }
};

const lightTheme = () => {
  refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
};

const darkTheme = () => {
  refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
};

function onChangeHendler(event) {
  event.currentTarget.checked ? darkTheme() : lightTheme();
  localStorage.setItem(
    'Theme',
    JSON.stringify(event.currentTarget.checked ? Theme.DARK : Theme.LIGHT),
  );
}

refs.switchInput.addEventListener('change', onChangeHendler);

refs.body.classList.add(Theme.LIGHT);

chosenTheme();
