'use strict';

const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const tbody = document.querySelector('tbody');

function dolarToNumber(value) {
  return +value.replace('$', '').replace(',', '.');
};

function sortTableByColumn(targetTitle) {
  const position = targetTitle.cellIndex;
  const tableRows = [...tbody.children];

  switch (targetTitle.innerText.toLowerCase()) {
    case 'name':
    case 'position':
    case 'office':
      tableRows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerText
          .localeCompare(nextRow.children[position].innerText);
      });
      break;

    case 'age':
      tableRows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerText
          - nextRow.children[position].innerText;
      });
      break;

    case 'salary':
      tableRows.sort((currentRow, nextRow) => {
        return dolarToNumber(currentRow.children[position].innerText)
          - dolarToNumber(nextRow.children[position].innerText);
      });
      break;
  }

  return tableRows;
}

[...thead.firstElementChild.children].forEach(title => {
  title.dataset.clickedTitle = false;
});

const appendSortedTable = e => {
  const title = e.target.closest('th');

  if (title.dataset.clickedTitle === 'false') {
    tbody.append(...sortTableByColumn(title));
    title.dataset.clickedTitle = true;
  } else {
    tbody.append(...sortTableByColumn(title).reverse());
    title.dataset.clickedTitle = false;
  }
};

thead.addEventListener('click', appendSortedTable);
tfoot.addEventListener('click', appendSortedTable);

let clickedRow = false;
let previousActiveRow;

tbody.addEventListener('click', e => {
  const tableRow = e.target.closest('tr');

  if (clickedRow) {
    previousActiveRow.classList.remove('active');
    clickedRow = true;
  }

  previousActiveRow = tableRow;
  tableRow.classList.add('active');
  clickedRow = true;
});

document.body.insertAdjacentHTML('beforeend', `
  <form class="new-employee-form">
    <label>Name:
      <input name="name" type="text" data-qa="name" required>
    </label>
    <label>Position:
      <input name="position" type="text" data-qa="position">
    </label>

    <label>Office:
      <select name="office" data-qa="office">
        <option value="Tokyo">Tokyo</option>
        <option value="Singapore">Singapore</option>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="San Francisco">San Francisco</option>
      </select>
    </label>
    <label>Age:
      <input name="age" type="number" data-qa="age" required>
    </label>
    <label>Salary:
      <input name="salary" type="number" data-qa="salary" required>
    </label>

    <button type="submit">
      Save to table
    </button>
  </form>
`);

const form = document.querySelector('form');

form.addEventListener('submit', addRowToTable);

const pushNotification = (title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  notification.className = `notification ${type}`;
  notification.dataset.qa = 'notification';

  h2.className = 'title';
  h2.innerText = title;

  p.innerText = description;

  notification.append(h2, p);
  document.body.append(notification);

  setTimeout(() => notification.remove(), 5000);
};

function addRowToTable(e) {
  e.preventDefault();

  const currentForm = new FormData(form);
  const currentName = currentForm.get('name');
  const currentPosition = currentForm.get('position');
  const currentOffice = currentForm.get('office');
  const currentAge = currentForm.get('age');
  const currentSalary = currentForm.get('salary');
  const inputs = document.querySelectorAll('input');

  if (currentName.length < 4) {
    pushNotification(
      'Name value has less than 4 letters', 'error', 'error'
    );
  } else if (currentPosition === '') {
    pushNotification('Write position', 'error', 'error');
  } else if (currentAge < 18 || currentAge > 90) {
    pushNotification(
      'Age value is less than 18 or more than 90 show', 'error', 'error'
    );
  } else {
    tbody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${currentName}</td>
      <td>${currentPosition}</td>
      <td>${currentOffice}</td>
      <td>${currentAge}</td>
      <td>$${Number(currentSalary).toLocaleString('en')}</td>
    </tr>
  `);
    pushNotification('МАЛАДЄЦ', 'success', 'success');

    [...inputs].forEach(input => {
      input.value = '';
    });
  }
};
