const arr = [
  {
    id: 26, title: 'Побег из Шоушенка', imdb: 9.30, year: 1994,
  },
  {
    id: 25, title: 'Крёстный отец', imdb: 9.20, year: 1972,
  },
  {
    id: 27, title: 'Крёстный отец 2', imdb: 9.00, year: 1974,
  },
  {
    id: 1047, title: 'Тёмный рыцарь', imdb: 9.00, year: 2008,
  },
  {
    id: 223, title: 'Криминальное чтиво', imdb: 8.90, year: 1994,
  },
];

const tbody = document.getElementById('movies');

// создаём таблицу без innerHTML +=
let html = '';
arr.forEach((item) => {
  html += `
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
tbody.innerHTML = html;

const trs = Array.from(document.querySelectorAll('#movies tr'));
const ths = Array.from(document.querySelectorAll('th'));

const modes = [
  { field: 'id', direction: 'asc' },
  { field: 'id', direction: 'desc' },
  { field: 'title', direction: 'asc' },
  { field: 'title', direction: 'desc' },
  { field: 'year', direction: 'asc' },
  { field: 'year', direction: 'desc' },
  { field: 'imdb', direction: 'asc' },
  { field: 'imdb', direction: 'desc' },
];

let mode = 0;

function sort(rows, field, direction) {
  return rows.sort((a, b) => {
    const A = a.dataset[field];
    const B = b.dataset[field];

    const isNumber = !Number.isNaN(Number(A)) && !Number.isNaN(Number(B));

    const valA = isNumber ? Number(A) : A;
    const valB = isNumber ? Number(B) : B;
    if (isNumber) {
      return direction === 'asc' ? valA - valB : valB - valA;
    }
    return direction === 'asc'
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });
}

setInterval(() => {
  const { field, direction } = modes[mode];
 if(field === 'id' && direction === 'asc'){
   ths[0].textContent = 'id ↓';
 }
 else {
  ths[0].textContent = 'id';
 }
  sort(trs, field, direction);
  tbody.replaceChildren(...trs);

  mode = (mode + 1) % modes.length;
}, 2000);
