// Select the output div
const outputDiv = document.querySelector('#output');

// Create the table element and append it to the output div
const table = document.createElement('table');
outputDiv.appendChild(table);

// Create a row for each number from 1 to 12 and append it to the table
for (let i = 1; i <= 12; i++) {
  const row = document.createElement('tr');

  // Create a cell for the number and append it to the row
  const numberCell = document.createElement('td');
  numberCell.textContent = i;
  numberCell.style.textAlign = 'center';
  row.appendChild(numberCell);

  // If the number is divisible by 4, add a blue background class
  if (i % 4 === 0) {
    row.style.backgroundColor = "lightblue";
  }
  numberCell.style.border = "1px solid black";
  row.style.textAlign = "center";

  // Append the row to the table
  table.appendChild(row);
}
