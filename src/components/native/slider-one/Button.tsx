import React, { ButtonHTMLAttributes } from "react";

import classes from "./slider.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return (
    <button type="button" {...rest} className={classes.button}>
      {children}
    </button>
  );
};
