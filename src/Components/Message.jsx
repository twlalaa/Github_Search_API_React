import React from "react";

const Message = (props) => {
  return (
    <h1 className="text-white text-3xl mt-5 mb-5">
      {props.children}
    </h1>
  );
};

export default Message;
