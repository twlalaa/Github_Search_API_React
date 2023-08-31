import React from "react";

const Name = (props) => {
  return (
    <div id="user" className="text-2xl font-bold text-white">
      {props.children}
    </div>
  );
};

export default Name;
