import React, { PropsWithChildren, useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";

import { useAccordionStyles } from "./useAccordionStyles";
import { SimpleArrow, ArrowProps } from "./Arrow";

export interface AccordionProps {
  title: string;
  hideArrow?: boolean;
  arrowComponent?: (props: ArrowProps) => JSX.Element;
}

export const Accordion = (props: PropsWithChildren<AccordionProps>) => {
  const { title, children, hideArrow, arrowComponent } = props;
  const [isOpened, setIsOpened] = useState(true);
  const classes = useAccordionStyles();
  const [ref, { height }] = useMeasure();

  const onToggleClick = () => setIsOpened(prev => !prev);

  const animProps = useSpring({
    maxHeight: isOpened ? height : 0,
    opacity: isOpened ? 1 : 0
  });

  const renderArrow = () => {
    if (hideArrow) {
      return null;
    }

    return arrowComponent ? (
      arrowComponent({ isOpened })
    ) : (
      <SimpleArrow isOpened={isOpened} />
    );
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.toggle} onClick={onToggleClick}>
        <div className={classes.title}>{title}</div>
        {renderArrow()}
      </button>

      <animated.div style={animProps} className={classes.content}>
        <div ref={ref}>{children}</div>
      </animated.div>
    </div>
  );
};
