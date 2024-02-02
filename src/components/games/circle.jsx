import React from "react";

const Circle = (props) => {
  const {key,circle} = props;
  return (
    <div
      key={key}
      className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center hover-effect"
      style={{ width: '50px', height: '50px', margin: '5px' }}
    >{circle}
    </div>
  );
};

export default Circle;
