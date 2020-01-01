import React, { SVGProps, useState } from "react";
import { useSpring, animated } from "react-spring";

export interface SvgMorphProps extends SVGProps<SVGSVGElement> {
  firstPath: string;
  secondPath: string;
  toggle: boolean;
  onClick?: () => void;
}

export const SvgMorph = (props: SvgMorphProps) => {
  const { firstPath, secondPath, toggle, onClick, ...rest } = props;

  const spring = useSpring({
    d: toggle ? firstPath : secondPath
  });

  return (
    <svg onClick={onClick} {...rest}>
      <animated.path {...spring} />
    </svg>
  );
};

export type InfiniteSvgMorphProps = Omit<SvgMorphProps, "onClick" | "toggle">;

export const InfiniteSvgMorph = (props: InfiniteSvgMorphProps) => {
  const [toggle, setToggle] = useState(true);
  const { firstPath, secondPath, ...rest } = props;

  const onClick = () => setToggle(prev => !prev);

  const spring = useSpring({
    d: toggle ? firstPath : secondPath
  });

  return (
    <svg onClick={onClick} {...rest} {...props}>
      <animated.path {...spring} />
    </svg>
  );
};
