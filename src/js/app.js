const trs = Array.from(document.querySelectorAll('#movies tr'));
const ths = Array.from(document.getElementsByTagName('th'));
let mode = 0;

setInterval(() => {
  switch (mode) {
    case 0:
      trs.sort((a, b) => Number(a.dataset.id) - Number(b.dataset.id));
      ths[0].textContent = 'id ↓';
      break;

    case 1:
      trs.sort((a, b) => Number(b.dataset.id) - Number(a.dataset.id));
      ths[0].textContent = 'id ↑';
      break;

    case 2:
      trs.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
      break;

    case 3:
      trs.sort((a, b) => b.dataset.title.localeCompare(a.dataset.title));
      break;

    case 4:
      trs.sort((a, b) => Number(a.dataset.year) - Number(b.dataset.year));
      break;

    case 5:
      trs.sort((a, b) => Number(b.dataset.year) - Number(a.dataset.year));
      break;

    case 6:
      trs.sort((a, b) => Number(a.dataset.imdb) - Number(b.dataset.imdb));
      break;

    case 7:
      trs.sort((a, b) => Number(b.dataset.imdb) - Number(a.dataset.imdb));
      break;
  }

  tbody.innerHTML = '';
  trs.forEach((tr) => tbody.appendChild(tr));

  mode = (mode + 1) % 8;
}, 2000);
