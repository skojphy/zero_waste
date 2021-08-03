import React, { useState } from "react";
import Square from "./Square";
import Bingo from "./Bingo";

const Board = (props) => {
  const [arr, setArr] = useState(new Array(25).fill(-1));
  const [num, setNum] = useState(100);
  const getCnt = (idx, val) => {
    const newArr = [...arr];
    newArr[idx] = val;
    setArr(newArr);
    setNum(idx);
  };

  return (
    <div className="container">
      <div className="board-row">
        <Square getCnt={getCnt} rownum={0} colnum={0} />
        <Square getCnt={getCnt} rownum={0} colnum={1} />
        <Square getCnt={getCnt} rownum={0} colnum={2} />
        <Square getCnt={getCnt} rownum={0} colnum={3} />
        <Square getCnt={getCnt} rownum={0} colnum={4} />
      </div>
      <div className="board-row">
        <Square getCnt={getCnt} rownum={1} colnum={0} />
        <Square getCnt={getCnt} rownum={1} colnum={1} />
        <Square getCnt={getCnt} rownum={1} colnum={2} />
        <Square getCnt={getCnt} rownum={1} colnum={3} />
        <Square getCnt={getCnt} rownum={1} colnum={4} />
      </div>
      <div className="board-row">
        <Square getCnt={getCnt} rownum={2} colnum={0} />
        <Square getCnt={getCnt} rownum={2} colnum={1} />
        <Square getCnt={getCnt} rownum={2} colnum={2} />
        <Square getCnt={getCnt} rownum={2} colnum={3} />
        <Square getCnt={getCnt} rownum={2} colnum={4} />
      </div>
      <div className="board-row">
        <Square getCnt={getCnt} rownum={3} colnum={0} />
        <Square getCnt={getCnt} rownum={3} colnum={1} />
        <Square getCnt={getCnt} rownum={3} colnum={2} />
        <Square getCnt={getCnt} rownum={3} colnum={3} />
        <Square getCnt={getCnt} rownum={3} colnum={4} />
      </div>
      <div className="board-row">
        <Square getCnt={getCnt} rownum={4} colnum={0} />
        <Square getCnt={getCnt} rownum={4} colnum={1} />
        <Square getCnt={getCnt} rownum={4} colnum={2} />
        <Square getCnt={getCnt} rownum={4} colnum={3} />
        <Square getCnt={getCnt} rownum={4} colnum={4} />
      </div>
      <div className="text">
        <Bingo getCnt={getCnt} array={arr} />
      </div>
    </div>
  );
};

export default Board;
