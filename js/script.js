// Debug
console.log('JS OK!');

// creare una griglia in cui ogni cella contiene un numero tra
// quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Functions
function createCell(level) {
    // add cell
    const cell = document.createElement('div');
    // add class to div
    cell.classList.add('cell');
    return cell;
    // if (level == 1) {
    //     cell.classList.add('cell-1');
    // } else if (level == 2) {
    //     cell.classList.add('cell-2');
    // } else if (level == 3) {
    //     cell.classList.add('cell-3');
    // }
}

let columns = 10;
let rows = 10;
const totalCells = columns * rows;

for (let i = 0; i < totalCells; i++) {
    const grid = document.getElementById('grid');
    // add cell
    const cell = createCell();
    // inner text
    cell.innerText = (i + 1);
    cell.id = i;
    // add bg on click
    cell.addEventListener('click', function (event) {
        cell.classList.toggle('bg-blue');
    });
    // add cell to div
    grid.appendChild(cell);
}

// let level = parseInt(prompt("Choose level 1-2-3?"));

// while (level < 1 || level > 3 || isNaN(level)) {
//     level = parseInt(prompt("Choose level 1-2-3?"));
// }
// if (level == 1) { // level 1 (1-100)
//     rows = 10;
//     columns = 10;
// } else if (level == 2) { // level 2 (1-81)
//     rows = 9;
//     columns = 9;
// } else if (level == 3) { // level 3 (1-49)
//     rows = 7;
//     columns = 7;
// }
