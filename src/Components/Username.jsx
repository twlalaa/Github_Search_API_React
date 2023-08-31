import React from "react";

const Username = (props) => {
  return (
    <div className="text-blue-600 mt-1">
      <a id="username" className="text-base" target="blank" href="">
        {props.children}
      </a>
    </div>
  );
};

export default Username;
