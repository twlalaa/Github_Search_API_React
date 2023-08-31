import React from "react";

const Info = (props) => {
  return (
    <div>
      <div className="text-sm text-white">{props.content}</div>
      <div id="repo" className="text-2xl font-bold text-white">
        {props.value}
      </div>
    </div>
  );
};

export default Info;
