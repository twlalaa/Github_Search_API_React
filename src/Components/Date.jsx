import React from "react";

const Date = (props) => {
  const date = props.date.slice(0, 10);
  return (
    <div id="date" className="absolute top-2 right-0 text-base text-white">
      {date}
    </div>
  );
};

export default Date;
