const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
const resetButton = document.getElementById('reset');

let isXTurn = true;

const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
    
];

const checkForWin = () => {
    return winningCombinations.some(combination => {
        const [a, b, c, d] = combination;
        return (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent 
            
        );
    });
};

const checkForDraw = () => {
    return [...cells].every(cell => cell.textContent);
};

const handleClick = (event) => {
    const cell = event.target;

    if (cell.textContent) return;

    cell.textContent = isXTurn ? 'X' : 'O';
    isXTurn = !isXTurn;

    if (checkForWin()) {
        setTimeout(() => alert(`${!isXTurn ? 'X' : 'O'} Wins!`), 10);
        return;
    }

    if (checkForDraw()) {
        setTimeout(() => alert('Draw!'), 10);
    }
};

const resetGame = () => {
    cells.forEach(cell => cell.textContent = '');
    isXTurn = true;
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
