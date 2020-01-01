import React from "react";

import {
  InfiniteSvgMorph,
  InfiniteSvgMorphProps,
  SvgMorph,
  SvgMorphProps
} from ".";

const paths = {
  max:
    "M 14.71 15.88 C 13.417 14.587 12.123 13.293 10.83 12 C 12.123 10.707 13.417 9.413 14.71 8.12 C 15.1 7.73 15.1 7.1 14.71 6.71 C 14.586 6.586 14.432 6.497 14.263 6.452 C 14.094 6.406 13.916 6.406 13.747 6.452 C 13.578 6.497 13.424 6.586 13.3 6.71 C 11.77 8.24 10.24 9.77 8.71 11.3 C 8.515 11.495 8.418 11.75 8.418 12.005 C 8.418 12.26 8.515 12.515 8.71 12.71 L 13.3 17.3 C 13.69 17.69 14.32 17.69 14.71 17.3 C 15.09 16.91 15.1 16.27 14.71 15.88 L 14.71 15.88",
  med:
    "M 15.29 12.71 C 15.485 12.515 15.582 12.26 15.582 12.005 C 15.582 11.75 15.485 11.495 15.29 11.3 C 13.76 9.77 12.23 8.24 10.7 6.71 C 10.31 6.32 9.68 6.32 9.29 6.71 C 9.166 6.834 9.077 6.988 9.032 7.157 C 8.986 7.326 8.986 7.504 9.032 7.673 C 9.077 7.842 9.166 7.996 9.29 8.12 C 10.583 9.413 11.877 10.707 13.17 12 C 11.877 13.293 10.583 14.587 9.29 15.88 L 9.29 15.88 C 8.9 16.27 8.91 16.91 9.29 17.3 C 9.68 17.69 10.31 17.69 10.7 17.3 L 15.29 12.71"
};

export const InfiniteSvg = () => {
  const props: InfiniteSvgMorphProps = {
    firstPath: paths.max,
    secondPath: paths.med,
    viewBox: "6 6 12 12",
    width: "200",
    height: "200",
    fill: "white"
  };

  return <InfiniteSvgMorph {...props} />;
};

export interface SvgProps {
  toggle: boolean;
  onClick?: () => void;
  className?: string;
}

export const Svg = (props: SvgProps) => {
  const combinedProps: SvgMorphProps = {
    ...props,
    firstPath: paths.max,
    secondPath: paths.med,
    viewBox: "6 6 12 12",
    fill: "currentColor"
  };

  return <SvgMorph {...combinedProps} />;
};
