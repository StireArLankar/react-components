import React from "react";
import cn from "classnames";
import useStyles from "./useStyles";

export interface NeumorphismProps {
  isActive?: boolean;
}

export const Neumorphism = (props: NeumorphismProps) => {
  const { isActive: active } = props;
  const classes = useStyles();

  const wrapperClass = cn({
    [classes.wrapper]: true,
    active
  });

  return <div className={wrapperClass} />;
};
