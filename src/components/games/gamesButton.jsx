import React from "react";

const GameButton = ({ label, onClick, variant, disabled, icon }) => (
  <button className={`btn btn-outline-${variant} mx-2`} onClick={onClick} disabled={disabled} >
    {icon ? <i className={`fa fa-${icon}`}></i> : label}
  </button>
);

export default GameButton;
