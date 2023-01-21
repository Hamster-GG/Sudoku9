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

function isSolved(board) {}
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
