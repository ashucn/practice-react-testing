import React from "react";
import "./button.css";

export const Button = ({ label }) => {
  return (
    <button data-testid="buttonDemo" className="button-style">
      {label}
    </button>
  );
};
export default Button;
