const arr = [
  { id: 26, title: "Побег из Шоушенка", imdb: 9.30, year: 1994 },
  { id: 25, title: "Крёстный отец", imdb: 9.20, year: 1972 },
  { id: 27, title: "Крёстный отец 2", imdb: 9.00, year: 1974 },
  { id: 1047, title: "Тёмный рыцарь", imdb: 9.00, year: 2008 },
  { id: 223, title: "Криминальное чтиво", imdb: 8.90, year: 1994 }
];

const tbody = document.getElementById('movies');


arr.forEach((item) => {
  tbody.innerHTML += `
    <tr 
      data-id="${item.id}" 
      data-title="${item.title}" 
      data-year="${item.year}" 
      data-imdb="${item.imdb}"
    >
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>(${item.year})</td>
      <td>imdb: ${item.imdb.toFixed(2)}</td>
    </tr>
  `;
});


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
      ths[0].textContent = 'id';
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
