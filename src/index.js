const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => tab.addEventListener('click', tabClickHandler));

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
