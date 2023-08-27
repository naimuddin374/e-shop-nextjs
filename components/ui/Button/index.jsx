import React from "react";

const Button = ({ class_name, type, label, onclick }) => {
  return (
    <button className={` ${class_name}`} onClick={onclick}>
      {label}
    </button>
  );
};

export default Button;
