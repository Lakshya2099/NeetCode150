/*
36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false

Approach : 

Special Boxes:

The puzzle is divided into 9 smaller 3x3 boxes.
We create 3 special lists:
rows: To keep track of numbers in each row.
cols: To keep track of numbers in each column.
boxes: To keep track of numbers in each of the 9 smaller boxes.
Checking Each Cell:

The code goes through each cell of the puzzle.
If a cell is empty (has a "."), it skips to the next cell.
If a cell has a number:
It checks if the number is already present in the same row, column, or the smaller box.
If the number is found in any of these places, it means the puzzle is not valid, and the code stops and returns false.
Adding Numbers:

If the number is not found in the row, column, or box, the code adds the number to the rows, cols, and boxes lists to keep track of it.
Final Check:

If the code checks all cells without finding any problems, it means the puzzle is valid, and the code returns true.

*/

var isValidSudoku = function(board) {
    let rows = Array.from({length : 9},() => new Set());
    let cols = Array.from({length : 9},() => new Set());
    let boxes = Array.from({length : 9},() => new Set());
    
  
      for (let r = 0; r < 9; r++) {
          for (let c = 0; c < 9; c++) {
              if (board[r][c] === '.') {
                  continue;
              }
  
              let value = board[r][c];
              let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
  
              if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
                  return false;
              }
  
              rows[r].add(value);
              cols[c].add(value);
              boxes[boxIndex].add(value);
          }
      }
  
      return true;    
  };