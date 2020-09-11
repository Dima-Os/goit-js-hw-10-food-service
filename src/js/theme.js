const refs = {
  switchInput: document.querySelector('input.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const chosenTheme = () => {
  const storagedTheme = JSON.parse(localStorage.getItem('Theme'));
  if (storagedTheme === Theme.DARK) {
    refs.switchInput.checked = true;
    darkTheme();
  }
};

const lightTheme = () => {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
};

const darkTheme = () => {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
};

function onChangeHendler(event) {
  const switchInut = event.currentTarget;
  switchInut.checked ? darkTheme() : lightTheme();
  localStorage.setItem(
    'Theme',
    JSON.stringify(switchInut.checked ? Theme.DARK : Theme.LIGHT),
  );
}

refs.switchInput.addEventListener('change', onChangeHendler);
chosenTheme();
