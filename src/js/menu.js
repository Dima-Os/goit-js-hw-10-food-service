'use strict';
const menuList = document.querySelector('.js-menu');

import itemTemplate from '../templates/menu.hbs';
import menuItems from '../menu-items.json';

menuList.insertAdjacentHTML('beforeend', itemTemplate(menuItems));
// console.log(itemTemplate(menuItems));
