document.addEventListener("DOMContentLoaded", function () {
    const boardSize = 5;
    const gameBoard = document.getElementById('game-board');
    const board = createBoard(boardSize);
    gameBoard.append(...board);

    randomizeBoard(board, boardSize);

    function createBoard(size) {
        const cells = [];
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', () => toggleCell(cell, size));
                cells.push(cell);
            }
        }
        return cells;
    }

    function toggleCell(cell, size) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        toggle(row, col, size);

        if (checkWin(size)) {
            setTimeout(() => alert("You win!"), 100);
        }
    }

    function toggle(row, col, size) {
        const index = row * size + col;
        board[index].classList.toggle('is-off');

        if (row > 0) board[(row - 1) * size + col].classList.toggle('is-off');
        if (row < size - 1) board[(row + 1) * size + col].classList.toggle('is-off');
        if (col > 0) board[row * size + (col - 1)].classList.toggle('is-off');
        if (col < size - 1) board[row * size + (col + 1)].classList.toggle('is-off');
    }

    function randomizeBoard(board, size) {
        for (let i = 0; i < size * size; i++) {
            if (Math.random() < 0.5) {
                const row = Math.floor(i / size);
                const col = i % size;
                toggle(row, col, size);
            }
        }
    }

    function checkWin(size) {
        return Array.from(board).every(cell => cell.classList.contains('is-off'));
    }
});
