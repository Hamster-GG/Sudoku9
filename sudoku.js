/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  //разбиваем на массив
  let boardArray = [];
  for (let i = 0; i < boardString.length; i += 9) {
    boardArray.push([...boardString.slice(i, i + 9)]);
  }
    // проходимся двумя циклами в поисках ‘-’ и заменяем на пчелку
  for (let row = 0; row < boardArray.length; row += 1) {
    for (let col = 0; col < boardArray.length; col += 1) {
      if (boardArray[row][col] === "-") {
        boardArray[row][col] = "🐝";

      }
    }
  }
  return boardArray;
}


function solve2(boardString) {
  //разбиваем на массив
  let boardArray = [];
  for (let i = 0; i < boardString.length; i += 9) {
    boardArray.push([...boardString.slice(i, i + 9)]);
  }
  //ищем "-"
  for (let row = 0; row < boardArray.length; row += 1) {
    for (let col = 0; col < boardArray.length; col += 1) {
      if (boardArray[row][col] === '-') {
        let numbersInStr = [];
        //проверка строки
        for (let i = 0; i < boardArray[row].length; i++) {
          if (
            boardArray[row][i] !== '-' &&
            !Array.isArray(boardArray[row][i])
          ) {
            numbersInStr.push(boardArray[row][i]);
          }
        }
        //проверка колонки
        for (let i = 0; i < boardArray.length; i++) {
          if (
            boardArray[i][col] !== '-' &&
            !Array.isArray(boardArray[i][col])
          ) {
            numbersInStr.push(boardArray[i][col]);
          }
        }
        //Проверка кубика 3*3
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;

        for (let i = boxRow; i < boxRow + 3; i++) {
          for (let j = boxCol; j < boxCol + 3; j++) {
            if (boardArray[i][j] !== '-' && !Array.isArray(boardArray[i][j])) {
              numbersInStr.push(boardArray[i][j]);
            }
          }
        }
        //заменяем на массив возможных чисел
        let allNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let possibleNumbers = [];
        for (let item of allNumbers) {
          if (!numbersInStr.includes(item)) {
            possibleNumbers.push(item);
          }
        }
        boardArray[row][col] = [...new Set(possibleNumbers)];
}
}
}
return boardArray;
}


function isSolved(board) {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      if (board[row][col] === '-') {
        return false;
      }
    }
  }
  return true;
}
function prettyBoard(board) {
  console.table(board);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  solve2,
};
