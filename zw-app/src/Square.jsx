import React, { useState } from "react";
import List from "./List.jsx";

const Square = (props) => {
  let status;
  const [cnt, setCnt] = useState(1);

  const sendCnt = () => {
    props.getCnt(props.rownum * 5 + props.colnum, cnt);
  };

  if (cnt === -1) {
    status = "checked";
  } else {
    status = "notchecked";
  }

  return (
    <button
      onClick={() => {
        setCnt(cnt * -1);
        sendCnt();
      }}
      className={`square ${status}`}
    >
      <List num={props.rownum * 5 + props.colnum} />
    </button>
  );
};

export default Square;
