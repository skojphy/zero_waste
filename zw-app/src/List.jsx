import React from "react";
import json from "./list.json";

const List = (props) => {
  return (
    <div>
      <span className="content">{json.data[props.num].content}</span>
    </div>
  );
};

export default List;
