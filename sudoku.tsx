import { useState } from 'react'
import { Input } from "/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card"

const initialBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

const isValid = (board: number[][], row: number, col: number, num: number) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false
    }
  }

  const startRow = Math.floor(row / 3) * 3
  const startCol = Math.floor(col / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false
      }
    }
  }

  return true
}

export default function SudokuGame() {
  const [board, setBoard] = useState(initialBoard)
  const [selectedCell, setSelectedCell] = useState<{ row: number, col: number } | null>(null)

  const handleInputChange = (row: number, col: number, value: string) => {
    const num = parseInt(value, 10)
    if (isNaN(num) || num < 1 || num > 9 || !isValid(board, row, col, num)) {
      return
    }

    const newBoard = board.map((r, rowIndex) =>
      r.map((c, colIndex) => (rowIndex === row && colIndex === col ? num : c))
    )

    setBoard(newBoard)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-green-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Sudoku Game</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-9 gap-1">
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const isPrefilled = initialBoard[rowIndex][colIndex] !== 0
              const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`p-2 flex items-center justify-center ${
                    isSelected ? 'bg-green-200' : 'bg-green-50'
                  }`}
                  onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                >
                  {isPrefilled ? (
                    <span className="text-lg font-bold">{cell}</span>
                  ) : (
                    <Input
                      type="number"
                      min="1"
                      max="9"
                      value={cell !== 0 ? cell : ''}
                      onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                      className="w-8 h-8 text-center text-lg font-bold"
                      disabled={isPrefilled}
                    />
                  )}
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}