import React, { useCallback } from "react";

const Bingo = (props) => {
  const arr = props.array;

  const lines = useCallback(() => {
    let bingo = 0;
    for (let i = 0; i < 5; ++i) {
      if (
        arr[i * 5] === 1 &&
        arr[i * 5 + 1] === 1 &&
        arr[i * 5 + 2] === 1 &&
        arr[i * 5 + 3] === 1 &&
        arr[i * 5 + 4] === 1
      ) {
        ++bingo;
      }
      if (
        arr[i] === 1 &&
        arr[i + 5] === 1 &&
        arr[i + 10] === 1 &&
        arr[i + 15] === 1 &&
        arr[i + 20] === 1
      ) {
        ++bingo;
      }
    }
    if (
      arr[0] === 1 &&
      arr[6] === 1 &&
      arr[12] === 1 &&
      arr[18] === 1 &&
      arr[24] === 1
    ) {
      ++bingo;
    }
    if (
      arr[4] === 1 &&
      arr[8] === 1 &&
      arr[12] === 1 &&
      arr[16] === 1 &&
      arr[20] === 1
    ) {
      ++bingo;
    }
    return bingo;
  }, [arr]);

  return <div>제로웨이스트 빙고 {lines()}줄 완성👍</div>;
};
export default Bingo;
