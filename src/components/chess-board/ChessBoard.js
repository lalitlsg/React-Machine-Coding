import React, { useEffect, useState } from 'react';
import style from './chess-board.module.css';

const arr = new Array(8);
for (let i = 0; i < 8; i++) arr[i] = new Array(8);

const initMatrixColor = () => {
  for (let i = 0; i < 8; i++) {
    let start = 'B';
    if (i % 2 === 0) start = 'W';

    arr[i][0] = start;

    for (let j = 1; j < 8; j++) {
      arr[i][j] = arr[i][j - 1] === 'B' ? 'W' : 'B';
    }
  }
};

const fillTopLeftDiagonal = (a, b) => {
  for (let i = a, j = b; i >= 0 && j >= 0; i--, j--) {
    arr[i][j] = 'R';
  }
};
const fillTopRightDiagonal = (a, b) => {
  for (let i = a, j = b; i >= 0 && j < 8; i--, j++) {
    arr[i][j] = 'R';
  }
};
const fillBottomLeftDiagonal = (a, b) => {
  for (let i = a, j = b; i < 8 && j >= 0; i++, j--) {
    arr[i][j] = 'R';
  }
};
const fillBottomRightDiagonal = (a, b) => {
  for (let i = a, j = b; i < 8 && j < 8; i++, j++) {
    arr[i][j] = 'R';
  }
};

const setMatrixObject = () => {
  const mat = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      mat.push({ i, j, color: arr[i][j] });
    }
  }
  return mat;
};

const ChessBoard = () => {
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    initMatrixColor();
    const mat = setMatrixObject();
    setMatrix(mat);
  }, []);

  const onBoxClick = (i, j) => {
    initMatrixColor();
    fillTopLeftDiagonal(i, j);
    fillTopRightDiagonal(i, j);
    fillBottomLeftDiagonal(i, j);
    fillBottomRightDiagonal(i, j);
    const mat = setMatrixObject();
    setMatrix(mat);
  };

  return (
    <div className={style.main}>
      <div className={style.chessContainer}>
        {matrix.map((b) => (
          <section
            key={'' + b.i + b.j + b.color}
            onClick={() => onBoxClick(b.i, b.j)}
            className={b.color === 'R' ? style.red : b.color === 'B' ? style.black : style.white}
          ></section>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
