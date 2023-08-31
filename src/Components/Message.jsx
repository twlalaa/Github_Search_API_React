import React from "react";

const Message = (props) => {
  return (
    <h1 id="loading" className="text-white text-3xl mt-5">
      {props.children}
    </h1>
  );
};

export default Message;
