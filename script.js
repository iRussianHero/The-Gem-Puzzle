let numbers = [...Array(15).keys()].map(x => x+1)//.sort(() => Math.random() - 0.5);
let cells = [];
const cellSize = 100;
let value;
let empty = {
    value: value,
    top: 0,
    left: 0
};

createField();

//Создание поля
function createField(){
    let field = document.querySelector('.field');
    for (let i = 1; i <= 15; i++) {
        const cell = document.createElement('div');
        value = numbers[i-1];
        cell.className = 'cell';
        cell.innerHTML = numbers[i-1];
        const left = i % 4;
        const top = (i - left) / 4;
        cell.style.left = `${left * cellSize}px`;
        cell.style.top = `${top * cellSize}px`;
        cellsRecord(value, left, top, cell);
        field.appendChild(cell);
        cell.addEventListener('click', () =>{
            move(i);
        });
    }
}

//Перемещение
function move(index){
    let cell = cells[index-1];

    let leftDiff = Math.abs(empty.left - cell.left);
    let topDiff = Math.abs(empty.top - cell.top);
    if (leftDiff + topDiff > 1) {
        return;
    }

    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top = `${empty.top * cellSize}px`;

    let emptyLeft = empty.left;
    let emptyTop = empty.top;
    empty.left = cell.left;
    empty.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;

    let isFinished = cells.every(cell => {
        return cell.value === cell.top * 4 + cell.left;
    });    
    console.log(cell.value, cell.top, cell.left);
    if (isFinished) {
        alert("Вы выйграли");
    }
}

//Запись поля
function cellsRecord(value, left, top, cell){
    cells.push({
        value: value,
        left: left,
        top: top,
        element: cell
    });
}

//Проверка победы
function checkWin(){
    
}