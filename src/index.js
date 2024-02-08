const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

tabs.forEach((tab) => tab.addEventListener('click', tabClickHandler));

btn.addEventListener('click', navToggleHandler);

function tabClickHandler(event) {
  const dataTarget = event.target.getAttribute('data-target');
  tabs.forEach((tab) => {
    if (tab.getAttribute('data-target') === dataTarget) {
      tab.firstElementChild.classList.add('border-b-4');
    } else {
      tab.firstElementChild.classList.remove('border-b-4');
    }
  });

  panels.forEach((panel) => {
    if (panel.classList.contains(dataTarget)) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}

function navToggleHandler(event) {
  btn.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}
